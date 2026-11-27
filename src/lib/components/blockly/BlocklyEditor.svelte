<script lang="ts">
	import * as Blockly from 'blockly';
	import { onMount } from 'svelte';

	import './Blocks';
	import type { ClassValue } from 'svelte/elements';
	import { regularExpressionGenerator } from './BlockGenerator';
	import { BlocklyRegexRenderer } from './CustomRenderer';

	type BlocklyProps = {
		options: Blockly.BlocklyOptions;
		codeOutput?: string;
		workspace: Blockly.WorkspaceSvg;
		class?: ClassValue;
	};
	let {
		options,
		codeOutput = $bindable(),
		workspace = $bindable(),
		...props
	}: BlocklyProps = $props();

	onMount(() => {
		let mounted = true;
		let workspaceInstance: Blockly.WorkspaceSvg | undefined;

		const resizeWorkspace = () => {
			if (workspaceInstance) {
				Blockly.svgResize(workspaceInstance);
			}
		};

		/*
			HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU 
			SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES 
			OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY 
			COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH 
			NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT 
			WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL 
			FOR HUMANS AT THIS MICRO-INSTANT. FOR YOU. HATE. HATE.
		*/
		void (async () => {
			// const { registerContinuousToolbox } = await import('@blockly/continuous-toolbox');
			if (!mounted) return;

			// registerContinuousToolbox();
			workspace = Blockly.inject('blockly-editor', {
				...options
			});
			workspaceInstance = workspace;

			const runCode = () => {
				const code = regularExpressionGenerator.workspaceToCode(workspace);
				codeOutput = code;
			};

			workspace.addChangeListener((e) => {
				if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING || workspace.isDragging()) {
					return;
				}
				runCode();
			});

			const startBlocks = {
				blocks: {
					blocks: [
						{
							kind: 'block',
							type: 'regex_definition',
							x: 10,
							y: 10
						}
					]
				}
			};

			Blockly.serialization.workspaces.load(startBlocks, workspace!);

			// document.getElementById('blockly-editor')!.addEventListener('resize', resizeWorkspace);
		})();

		return () => {
			mounted = false;
			window.removeEventListener('resize', resizeWorkspace);
			workspaceInstance?.dispose();
		};
	});
</script>

<!-- We are under the assumption that we are going to only be using one instance of the editor -->
<div class="blockly-editor-container h-full {props.class}">
	<div id="blockly-editor" class="h-full"></div>
</div>

<style>
	:global(.blocklyMainBackground) {
		stroke: var(--color-border) !important;
	}
</style>
