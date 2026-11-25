<script lang="ts">
	import * as Blockly from 'blockly';
	// import { onMount } from 'svelte';

	// import WorkspaceContainer from '#lib/components/WorkspaceContainer.svelte';
	import { TokyoNightTheme, BlocklyEditor, Toolbox, Plugins } from '#lib/components/blockly';
	// import { ToolPanel, ToolIcon, ToolTypes } from '#lib/components/toolBar';

	import { Button } from '#lib/components/ui/button/index.js';

	let options = {
		trashcan: true,
		toolbox: Toolbox,
		plugins: Plugins,
		theme: TokyoNightTheme
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

<!-- <ToolPanel>
	<ToolIcon ctx={ToolTypes.Match}>
		<Iconmtch></Iconmtch>
	</ToolIcon>
	<ToolIcon ctx={ToolTypes.Substitution}><Iconsubs></Iconsubs></ToolIcon>
	<ToolIcon ctx={ToolTypes.Extraction}><Iconextr></Iconextr></ToolIcon>
	<div></div>
	<ToolIcon ctx={ToolTypes.MyLibrary} needAuth><Iconmylb></Iconmylb></ToolIcon>
	<ToolIcon ctx={ToolTypes.Pipeline} needAuth><Iconpipl></Iconpipl></ToolIcon>

	<ToolIcon ctx={ToolTypes.Account} needAuth><Iconacct></Iconacct></ToolIcon>
</ToolPanel> -->

<!-- <WorkspaceContainer>
	<BlocklyEditor {options} bind:codeOutput={message} bind:workspace></BlocklyEditor>
	<div style="background-color:blue"></div>
</WorkspaceContainer> -->

<!-- <div>{message}</div> -->

<!-- <Button>Click me</Button> -->

<style>
</style>
