<script lang="ts">
	import * as Blockly from 'blockly';
	import { BlocklyEditor, Toolbox, Plugins } from '#lib/blockly';
	import { onMount } from 'svelte';

	let options = {
		trashcan: true,
		toolbox: Toolbox,
		plugins: Plugins
	};

	let workspace: Blockly.WorkspaceSvg;

	let message = $state('Hello, World!');

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

	onMount(() => {
		console.log(workspace);

		Blockly.serialization.workspaces.load(startBlocks, workspace);
	});
</script>

<h1>Welcome to SvelteKit</h1>

<BlocklyEditor {options} bind:codeOutput={message} bind:workspace></BlocklyEditor>

<div>{message}</div>
