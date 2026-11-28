<script lang="ts">
	import CodeMirrorEditor from './codemirror/CodeMirrorEditor.svelte';
	import ScrollArea from './ui/scroll-area/scroll-area.svelte';
	import Separator from './ui/separator/separator.svelte';
</script>

<div class="flex h-screen flex-col flex-nowrap p-3">
	<p>tab bar ting</p>
	<Separator class="my-1"></Separator>
	<CodeMirrorEditor></CodeMirrorEditor>
</div>

<style>
</style>
