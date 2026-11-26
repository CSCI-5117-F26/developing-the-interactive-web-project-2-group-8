<script lang="ts">
	import * as Blockly from 'blockly';
	import { onMount } from 'svelte';

	import './Blocks';
	// import { regularExpressionGenerator } from './BlockGenerator';

	type BlocklyProps = {
		options: Blockly.BlocklyOptions;
		codeOutput?: string;
		workspace: Blockly.WorkspaceSvg;
	};
	let { options, codeOutput = $bindable(), workspace = $bindable() }: BlocklyProps = $props();

	onMount(() => {
		let mounted = true;
		let workspaceInstance: Blockly.WorkspaceSvg | undefined;

		const resizeWorkspace = () => {
			if (workspaceInstance) {
				Blockly.svgResize(workspaceInstance);
			}
		};

		void (async () => {
			const { registerContinuousToolbox } = await import('@blockly/continuous-toolbox');
			if (!mounted) return;

			registerContinuousToolbox();
			workspace = Blockly.inject('blockly-editor', {
				...options
			});
			workspaceInstance = workspace;
			window.addEventListener('resize', resizeWorkspace);
		})();

		return () => {
			mounted = false;
			window.removeEventListener('resize', resizeWorkspace);
			workspaceInstance?.dispose();
		};
	});
</script>

<!-- We are under the assumption that we are going to only be using one instance of the editor -->
<div class="blockly-editor-container h-full">
	<div id="blockly-editor" class="h-full"></div>
</div>

<style>
</style>
