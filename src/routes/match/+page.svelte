<script lang="ts">
	import RegexBlockContainer from '#lib/components/RegexBlockContainer.svelte';
	import * as Blockly from 'blockly';
	import * as Resizable from '#lib/components/ui/resizable/index.ts';
	import Separator from '#lib/components/ui/separator/separator.svelte';

	let { paneSize }: { paneSize: number } = $props();

	let workspace: Blockly.WorkspaceSvg;

	let r = () => {
		if (workspace) Blockly.svgResize(workspace);
	};
</script>

<Resizable.PaneGroup direction="horizontal">
	<Resizable.Pane onResize={r} defaultSize={50}>
		<RegexBlockContainer bind:workspace></RegexBlockContainer>
	</Resizable.Pane>
	<Resizable.Handle />
	<Resizable.Pane defaultSize={50}>
		<div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Token Viewer</span>
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>

<style>
</style>
