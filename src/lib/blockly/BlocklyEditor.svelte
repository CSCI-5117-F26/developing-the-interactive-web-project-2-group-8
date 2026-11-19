<script lang="ts">
	import * as Blockly from 'blockly';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { regularExpressionGenerator } from './BlockGenerator';
	// import { registerContinuousToolbox } from '@blockly/continuous-toolbox';
	// registerContinuousToolbox();

	type BlocklyProps = {
		options: Blockly.BlocklyOptions;
		codeOutput?: string;
		workspace: Blockly.WorkspaceSvg;
	};
	let { options, codeOutput = $bindable(), workspace = $bindable() }: BlocklyProps = $props();

	onMount(() => {
		workspace = Blockly.inject('blockly-editor', {
			...options
		});

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

		const onresize = () => {};
		window.addEventListener('resize', () => {
			Blockly.svgResize(workspace);
		});

		// workspace.addChangeListener
	});
</script>

<!-- We are under the assumption that we are going to only be using one instance of the editor -->
<div class="blockly-editor-container">
	<div id="blockly-editor"></div>
</div>

<style>
	#blockly-editor {
		width: 100%;
		height: 100%;
		display: block;
	}

	.blockly-editor-container {
		width: 800px;
		height: 400px;
		display: flex;
	}
</style>
