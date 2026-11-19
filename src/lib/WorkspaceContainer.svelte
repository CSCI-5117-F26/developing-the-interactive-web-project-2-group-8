<script lang="ts">
	let { children } = $props();
	let child = $state([]);
</script>

<div>
	{#if child.length > 0}
		<p>First URL: {child[0]}</p>
	{/if}
</div>

<!-- <div aria-label="Resize navigation panel" aria-orientation="vertical" class="n4YC7 wKDUk" role="separator" tabindex="0"></div> -->

<style lang="less">
</style>
