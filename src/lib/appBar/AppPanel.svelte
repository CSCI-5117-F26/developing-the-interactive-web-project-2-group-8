<script lang="ts">
	import { AppTypes } from './AppTypes';

	let { children } = $props();
	let focusedApp: AppTypes = $state(AppTypes.Match);

	let child = $state([]);
</script>

<div class="appPanel"></div>

<style lang="less">
	.appPanel {
		width: 120px;
		@media (max-width: 768px) {
		}
	}
</style>
