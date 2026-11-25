<script lang="ts">
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import * as Tooltip from '#lib/components/ui/tooltip/index.ts';

	import {
		Funnel,
		Library,
		Plus,
		Replace,
		ScanSearch,
		setLucideProps,
		Telescope,
		User,
		Workflow,
		type LucideIcon
	} from '@lucide/svelte';
	import type { Component } from 'svelte';
	import SidebarGroup from './ui/sidebar/sidebar-group.svelte';
	import { Header } from './ui/sheet';

	type ITool = {
		name: string;
		url: string;
		icon: LucideIcon;
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

	// let currentUrl = window.location.pathname;
</script>

<Sidebar.Root collapsible="icon">
	<!-- <Sidebar.Header> -->
	<!-- </Sidebar.Header> -->
	<Sidebar.Content>
		<Sidebar.Group>
			<!-- <Sidebar.GroupLabel>Application</Sidebar.GroupLabel> -->
			<Sidebar.Menu>
				{#each tools as tool}
					{#if tool == 'seperator'}
						<Sidebar.Separator></Sidebar.Separator>
					{:else}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								// isActive={currentUrl.includes(tool.url)}
								tooltipContent={tool.name}
							>
								{#snippet child({ props })}
									{@const Icon = tool.icon}

									<a href={tool.url} {...props}>
										<!-- svelte-ignore svelte_component_deprecated -->
										<Icon />
										<span>{tool.name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/if}
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>

	<!-- TODO: Obviously, make this know if the user is logged in or not. -->
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					<User /> Username
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
