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
	import { lineColPanel } from './LineColPanel';
	import Card from '../ui/card/card.svelte';

	type RichRegexTokenViewer = {
		regexInput?: string | RegExp;
		class?: ClassValue;
	};
	let { regexInput = $bindable(), ...props }: RichRegexTokenViewer = $props();

	let searchExtension: Extension = search();
	let extensions: Extension[] = [searchExtension, viewWhitespace, viewEOL, lineColPanel];
	let testString = 'the quick brown fox jumps over the lazy dog\n'.repeat(50);
</script>

<CodeMirror
	class="rounded-2xl bg-accent p-2"
	{extensions}
	tabSize={4}
	lineWrapping={true}
	lineNumbers={false}
	foldGutter={false}
	indentOnInput={false}
	bracketMatching={false}
	autocompletion={false}
	value={testString}
/>

<style>
	:global(.cm-scroller) {
		overflow: auto !important;
		overscroll-behavior: none;
	}

	:global(.cm-editor) {
		overflow: hidden;
		max-height: 100%;
	}

	:global(.cm-status-bar) {
		background-color: var(--background);
		border-top: 1px solid var(--border);
		color: var(--foreground);
		font-size: 0.75rem;
		line-height: 1.5rem;
		padding: 0 0.75rem;
	}
</style>
