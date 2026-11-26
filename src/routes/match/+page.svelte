<script lang="ts">
	import RegexBlockContainer from '#lib/components/RegexBlockContainer.svelte';
	import * as Resizable from '#lib/components/ui/resizable/index.ts';
	import Separator from '#lib/components/ui/separator/separator.svelte';
</script>

<Resizable.PaneGroup direction="horizontal">
	<Resizable.Pane defaultSize={50}>
		<!-- <div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Blockly Editor</span>
		</div> -->

		<RegexBlockContainer></RegexBlockContainer>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={50}>
		<div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Token Viewer</span>
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>

<style>
</style>
