<script lang="ts">
	import * as Blockly from 'blockly';
	import { onMount } from 'svelte';

	import WorkspaceContainer from '#lib/WorkspaceContainer.svelte';
	import { BlocklyEditor, Toolbox, Plugins } from '#lib/blockly';
	import { ToolPanel, ToolIcon, ToolTypes } from '#lib/toolBar';
	import { Iconmtch, Iconsubs, Iconextr, Iconmylb, Iconpipl, Iconacct } from '#lib/toolBar';

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

	// onMount(() => {
	// 	console.log(workspace);

	// 	Blockly.serialization.workspaces.load(startBlocks, workspace);
	// });
</script>

<ToolPanel>
	<ToolIcon ctx={ToolTypes.Match}><Iconmtch></Iconmtch></ToolIcon>
	<ToolIcon ctx={ToolTypes.Substitution}><Iconsubs></Iconsubs></ToolIcon>
	<ToolIcon ctx={ToolTypes.Extraction}><Iconextr></Iconextr></ToolIcon>
	<div></div>
	<ToolIcon ctx={ToolTypes.MyLibrary} needAuth><Iconmylb></Iconmylb></ToolIcon>
	<ToolIcon ctx={ToolTypes.Pipeline} needAuth><Iconpipl></Iconpipl></ToolIcon>

	<ToolIcon ctx={ToolTypes.Account} needAuth><Iconacct></Iconacct></ToolIcon>
</ToolPanel>

<WorkspaceContainer>
	<BlocklyEditor {options} bind:codeOutput={message} bind:workspace></BlocklyEditor>
</WorkspaceContainer>

<div>{message}</div>

<style lang="less">
	@import '#lib/Theme.less';
	:global {
		#app {
			display: flex;
			height: 100vh;
			width: 100vw;
			background-color: @bg;
		}
		body {
			margin: 0;
			padding: none;
		}
	}
</style>
