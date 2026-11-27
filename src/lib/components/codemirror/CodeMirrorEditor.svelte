<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import CodeMirror from 'svelte-codemirror-editor';
	import { search } from '@codemirror/search';
	import { showPanel, type Panel } from '@codemirror/view';
	import Textarea from '../ui/textarea/textarea.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { type Extension, Text } from '@codemirror/state';
	import { viewWhitespace } from './WhitespaceWidget';
	import { viewEOL } from './EOLWidget';

	type RichRegexTokenViewer = {
		regexInput?: string | RegExp;
		class?: ClassValue;
	};
	let { regexInput = $bindable(), ...props }: RichRegexTokenViewer = $props();

	let searchExtension: Extension = search();
	let extensions: Extension[] = [searchExtension, viewWhitespace, viewEOL];
</script>

<div class="h-full">
	<CodeMirror
		{extensions}
		tabSize={4}
		lineWrapping={true}
		lineNumbers={false}
		foldGutter={false}
		indentOnInput={false}
		bracketMatching={false}
		autocompletion={false}
	/>
</div>

<style>
</style>
