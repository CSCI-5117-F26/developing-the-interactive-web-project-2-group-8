<script lang="ts">
	import * as Resizable from '#lib/components/ui/resizable/index.ts';
</script>

<Resizable.PaneGroup direction="horizontal">
	<Resizable.Pane defaultSize={40}>
		<div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Blockly Editor</span>
		</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={30}>
		<div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Token Viewer, with a text input on the top</span>
		</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={30}>
		<div class="flex h-full items-center justify-center p-6">
			<span class="font-semibold">Text Area?</span>
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>

<style>
</style>
