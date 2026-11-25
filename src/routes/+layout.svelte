<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import AppSidebar from '#lib/components/app-sidebar.svelte';
	import { onMount } from 'svelte';

	// import * as Tooltip from '#lib/components/ui/tooltip/index.ts';

	let { children }: LayoutProps = $props();

	onMount(() => {});
</script>

<svelte:head>
	<title>RegExtra</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- {@render children()} -->

<Sidebar.Provider open={false}>
	<AppSidebar />
	<main>
		{@render children?.()}
	</main>
</Sidebar.Provider>

<style lang="less">
	main {
		flex-grow: 1;
	}
</style>
