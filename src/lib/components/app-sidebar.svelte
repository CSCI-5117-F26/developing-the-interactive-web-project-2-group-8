<script lang="ts">
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import * as Tooltip from '#lib/components/ui/tooltip/index.ts';

	import { Funnel, Library, Plus, Replace, ScanSearch, Telescope, Workflow } from '@lucide/svelte';
	import type { Component } from 'svelte';

	type ITool = {
		name: string;
		url?: string;
		icon?: typeof Plus;
	};
	type ISeperator = 'seperator';
	const tools: (ITool | ISeperator)[] = [
		{ name: 'Match', url: 'match', icon: ScanSearch },
		{ name: 'Substitution', url: 'substitution', icon: Replace },
		{ name: 'Extraction', url: 'extraction', icon: Funnel },
		{ name: 'Pipeline', url: 'pipeline', icon: Workflow },
		'seperator',
		{ name: 'Explore', url: 'explore', icon: Telescope },
		{ name: 'My Library', url: 'library', icon: Library }
	];
</script>

<Sidebar.Root collapsible="icon">
	<Sidebar.Header />
	<Sidebar.Content>
		<Sidebar.Group>
			<!-- <Sidebar.GroupLabel>Application</Sidebar.GroupLabel> -->
			<Sidebar.Menu>
				{#each tools as tool}
					{#if tool == 'seperator'}
						<Sidebar.Separator></Sidebar.Separator>
					{:else}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton tooltipContent={tool.name}>
								{@const ico = tool.icon}
								{#snippet child({ props })}
									<a href={tool.url} {...props}>
										<!-- svelte-ignore svelte_component_deprecated -->
										<svelte:component this={tool.icon} />
										<span>{tool.name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/if}
				{/each}
			</Sidebar.Menu>

			<Sidebar.GroupContent></Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>
