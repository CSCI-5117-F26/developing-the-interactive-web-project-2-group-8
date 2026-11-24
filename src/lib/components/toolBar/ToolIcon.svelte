<script lang="ts">
	import { ToolTypes } from './ToolTypes';

	import { onMount } from 'svelte';
	let { ctx, needAuth: boolean = false } = $props();
</script>

<div class="ico ico-{ctx}">
	<slot></slot>
</div>

<style lang="less">
	@import '#lib/Theme.less';

	.ico {
		width: 36px;
		height: 36px;
		margin: 6px;
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 6px;
	}

	each(@app-colors, {
  .ico-@{key} {
    background-color: @value;
    filter: drop-shadow(0px 3px 0px darken(@value, 10));

		:global(svg > * > *) {
			stroke:darken(@value,15) !important;
		}
  }
});
</style>
