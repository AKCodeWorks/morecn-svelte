<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import Github from '@lucide/svelte/icons/github';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<title>MoreCN-Svelte</title>
</svelte:head>
<Toaster />
<ModeWatcher defaultMode={'system'} />

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b">
			<div class="flex items-center gap-2 px-3">
				<Sidebar.Trigger />
				<Separator orientation="vertical" class="me-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						{#each page.url.pathname.split('/').filter(Boolean) as segment, index}
							<Breadcrumb.Item>
								{#if index < page.url.pathname.split('/').filter(Boolean).length - 1}
									<Breadcrumb.Item>
										{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}
									</Breadcrumb.Item>
								{:else}
									<Breadcrumb.Page>
										{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}
									</Breadcrumb.Page>
								{/if}
							</Breadcrumb.Item>
							{#if index < page.url.pathname.split('/').filter(Boolean).length - 1}
								<Breadcrumb.Separator />
							{/if}
						{/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
			<div class="mr-4 ml-auto flex gap-1">
				<Button
					variant="secondary"
					target="_blank"
					href="https://github.com/akcodeworks/morecn-svelte"
				>
					<Github />
				</Button>
				<ModeToggle />
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4">
			<div class="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min">
				{@render children()}
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
