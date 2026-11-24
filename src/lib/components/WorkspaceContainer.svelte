<script lang="ts">
	let { children } = $props();
	let child = $state([]);
	// console.log(children);
</script>

<div class="workspaceContainer">
	<!-- {#if $$slots.length}
		<p>First URL: {child[0]}</p>
	{/if} -->

	<slot></slot>
</div>

<!-- <div aria-label="Resize navigation panel" aria-orientation="vertical" class="n4YC7 wKDUk" role="separator" tabindex="0"></div> -->

<style lang="less">
	@import '#lib/Theme.less';

	.workspaceContainer {
		display: flex;
		flex-grow: 1;
		:global(> *) {
			flex-grow: inherit;
		}
	}
</style>
