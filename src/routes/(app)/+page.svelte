<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-wrap justify-center gap-6">
	<p>Hello {data.user.username}</p>
</div>
