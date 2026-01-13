<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import ModeToggle from '$lib/components/mode-toggle.svelte';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>MoreCN-Svelte</title>
</svelte:head>
<Toaster />
<ModeWatcher defaultMode={'system'} />
<ModeToggle />
{@render children()}
