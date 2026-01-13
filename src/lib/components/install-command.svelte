<script lang="ts">
	import { page } from '$app/state';
	import * as Tabs from '$lib/components/ui/tabs';
	import { toast } from 'svelte-sonner';
	import Copy from '@lucide/svelte/icons/copy';
	import Button from './ui/button/button.svelte';

	let packageManager = [
		{ pm: 'npm', cmd: 'npx' },
		{ pm: 'pnpm', cmd: 'pnpx' },
		{ pm: 'bun', cmd: 'bunx' }
	];

	let origin = page.url.origin;

	let value = $state('npx');

	let { name } = $props();

	function handleCopy(command: string) {
		navigator.clipboard.writeText(command);
		toast.success('Command copied to clipboard!');
	}
</script>

<Tabs.Root bind:value class=" relative w-full rounded border bg-muted p-4 pt-0">
	<Tabs.List class=" w-fit ">
		{#each packageManager as p (p.pm)}
			<Tabs.Trigger value={p.cmd}>{p.pm}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each packageManager as p (p.pm)}
		{@const command = `${p.cmd} shadcn-svelte@latest add ${origin}/r/${name}.json`}
		<Tabs.Content class="w-full rounded bg-muted" value={p.cmd}>
			<pre class="text-xs text-muted-foreground">{command}</pre>

			<Button
				onclick={() => handleCopy(command)}
				class="absolute top-0 right-0 cursor-pointer active:scale-90"
				variant="ghost"
				size="icon-sm"><Copy /></Button
			>
		</Tabs.Content>
	{/each}
</Tabs.Root>
