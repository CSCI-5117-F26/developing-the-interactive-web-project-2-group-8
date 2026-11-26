<script lang="ts">
	import * as Blockly from 'blockly/core';

	import { TokyoNightTheme, BlocklyEditor, Toolbox, Plugins } from '#lib/components/blockly';
	import Separator from './ui/separator/separator.svelte';

	// import { BlocklyEditor, Toolbox } from '#lib/components/blockly';

	import { onMount } from 'svelte';

	let options = {
		trashcan: true,
		toolbox: Toolbox,
		plugins: Plugins,
		theme: TokyoNightTheme
	};

	let workspace: Blockly.WorkspaceSvg;

	let message = $state('Hello, World!');

	// const startBlocks = {
	// 	blocks: {
	// 		blocks: [
	// 			{
	// 				kind: 'block',
	// 				type: 'regex_definition',
	// 				x: 10,
	// 				y: 10
	// 			}
	// 		]
	// 	}
	// };

	// onMount(() => {
	// 	Blockly.serialization.workspaces.load(startBlocks, workspace!);
	// });
</script>

<div class="flex h-full flex-col flex-nowrap p-3">
	<p>tab bar ting</p>
	<Separator></Separator>

	<BlocklyEditor {options} bind:codeOutput={message} bind:workspace></BlocklyEditor>

	<Separator></Separator>
	<p>Small text area to copy regex ( ? )</p>
</div>

<style>
</style>
