<script lang="ts">
	import { ToolTypes } from './ToolTypes';

	let { children } = $props();
	let focusedApp: ToolTypes = $state(ToolTypes.Match);

	let child = $state([]);
</script>

<div class="toolPanel">
	<slot></slot>
</div>

<style lang="less">
	@import '../Theme.less';

	.toolPanel {
		height: 100%;
		background-color: @bg-secondary;

		display: flex;
		flex-direction: column;

		@media (max-width: 768px) {
		}
	}
</style>
