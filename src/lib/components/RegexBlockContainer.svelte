<script lang="ts">
	import * as Blockly from 'blockly/core';

	import { TokyoNightTheme, BlocklyEditor, Toolbox, Plugins } from '#lib/components/blockly';
	import Separator from './ui/separator/separator.svelte';

	// import { BlocklyEditor, Toolbox } from '#lib/components/blockly';

	let { workspace = $bindable() } = $props();

	import { onMount } from 'svelte';
	import Input from './ui/input/input.svelte';
	import Field from './ui/field/field.svelte';
	import { Button } from './ui/button';
	import { ClipboardCopy } from '@lucide/svelte';
	import ButtonGroup from './ui/button-group/button-group.svelte';
	import TooltipTrigger from './ui/tooltip/tooltip-trigger.svelte';
	import TooltipContent from './ui/tooltip/tooltip-content.svelte';

	import { toast } from 'svelte-sonner';

	let options: Blockly.BlocklyOptions = {
		trashcan: true,
		toolbox: Toolbox,
		plugins: Plugins,
		theme: TokyoNightTheme,
		grid: {
			colour: '#55587a',
			spacing: 15,
			snap: true,
			length: 1
		}
	};

	let copyToClip = async () => {
		await navigator.clipboard.writeText(codeOutput);
		toast('Copied to Clipboard!');
	};

	// let workspace: Blockly.WorkspaceSvg;

	let codeOutput = $state('//');
</script>

<div class="flex h-full flex-col flex-nowrap p-3">
	<p>tab bar ting</p>
	<Separator class="my-1"></Separator>

	<BlocklyEditor {options} bind:codeOutput bind:workspace></BlocklyEditor>

	<Separator class="my-1"></Separator>

	<ButtonGroup class="w-full">
		<Input disabled id="input-button-group" placeholder="..." bind:value={codeOutput} />
		<Button variant="outline" size="icon" onclick={copyToClip}><ClipboardCopy /></Button>
	</ButtonGroup>
</div>

<style>
</style>
