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
	import type { SidebarMenuButtonVariant } from './ui/sidebar/sidebar-menu-button.svelte';

	type ITool = {
		name: string;
		url: string;
		icon: LucideIcon;
		color: SidebarMenuButtonVariant;
	};
	type ISeperator = 'seperator';
	const tools: (ITool | ISeperator)[] = [
		{ name: 'Match', url: 'match', icon: ScanSearch, color: 'red' },
		{ name: 'Substitution', url: 'substitution', icon: Replace, color: 'yellow' },
		{ name: 'Extraction', url: 'extraction', icon: Funnel, color: 'green' },
		{ name: 'Pipeline', url: 'pipeline', icon: Workflow, color: 'cyan' },
		'seperator',
		{ name: 'Explore', url: 'explore', icon: Telescope, color: 'blue' },
		{ name: 'My Library', url: 'library', icon: Library, color: 'magenta' }
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
								variant={tool.color}
								// isActive={currentUrl.includes(tool.url)}
								tooltipContent={tool.name}
							>
								{#snippet child({ props })}
									{@const Icon = tool.icon}

									<a class="text-inherit" href={tool.url} {...props}>
										<Icon class="stroke-inherit" />
										<span class="text-inherit">{tool.name}</span>
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

<style>
</style>
