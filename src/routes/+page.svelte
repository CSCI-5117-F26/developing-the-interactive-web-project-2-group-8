<script lang="ts">
	import * as Blockly from 'blockly';
	import { onMount } from 'svelte';

	import WorkspaceContainer from '#lib/WorkspaceContainer.svelte';
	import { BlocklyEditor, Toolbox, Plugins } from '#lib/blockly';
	import { AppPanel, AppIcon, AppTypes } from '#lib/appBar';

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

<AppPanel>
	<!-- <AppIcon ctx={AppTypes.Match}></AppIcon>
	<AppIcon ctx={AppTypes.Substitution}></AppIcon>
	<AppIcon ctx={AppTypes.Extraction}></AppIcon>
	<div></div>
	<AppIcon ctx={AppTypes.MyLibrary} needAuth></AppIcon>
	<AppIcon ctx={AppTypes.Pipeline} needAuth></AppIcon>

	<AppIcon ctx={AppTypes.Account} needAuth></AppIcon> -->
</AppPanel>

<WorkspaceContainer>
	<BlocklyEditor {options} bind:codeOutput={message} bind:workspace></BlocklyEditor>
</WorkspaceContainer>

<div>{message}</div>

<style lang="less">
	@import '#lib/Theme.less';
	:global {
		body {
			background-color: @bg;
		}
	}
</style>
