<script lang="ts">
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import * as Tooltip from '#lib/components/ui/tooltip/index.ts';

	import { Plus } from '@lucide/svelte';
</script>

<Sidebar.Root collapsible="icon">
	<Sidebar.Header />
	<Sidebar.Content>
		<Sidebar.Group>
			<!-- <Sidebar.GroupLabel>Application</Sidebar.GroupLabel> -->
			<Sidebar.Menu>
				<!-- {#each projects as project (project.name)} -->
				<Sidebar.MenuItem>
					<Sidebar.MenuButton tooltipContent="fuck">
						{#snippet child({ props })}
							<a href={'E'} {...props}>
								<Plus />
								<span>{'F'}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
				<!-- {/each} -->
			</Sidebar.Menu>

			<Sidebar.GroupContent></Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>
