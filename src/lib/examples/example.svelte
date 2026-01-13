<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import Copy from '@lucide/svelte/icons/copy';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Item from '$lib/components/ui/item/index.js';
	import { browser } from '$app/environment';
	import Button from '$lib/components/ui/button/button.svelte';
	import InstallCommand from '$lib/components/install-command.svelte';

	import type { Component, Snippet } from 'svelte';
	import { toast } from 'svelte-sonner';

	type Props = {
		code: string;
		component: () => any;
		title: string;
		description: string;
		name: string;
		props?: { value: string; description: string; type: string; required?: boolean }[];
	};

	let { code, component, title, description, props, name }: Props = $props();

	let value = $state('demo');
</script>

<svelte:head>
	{@html github}
</svelte:head>

{#if browser}
	<div class="relative flex min-h-112.5 flex-col gap-4 p-4">
		<div class="flex items-center justify-between">
			<div>
				<h2>
					{title}
				</h2>
				<p>{description}</p>
			</div>
		</div>

		{@render item({
			title: 'Example',
			description: 'A simple example of the component in action.',
			children: component
		})}

		{@render item({
			title: 'Installation',
			children: installSnippet,
			description: 'Install the Combobox component via the package manager of your choice.'
		})}

		{@render item({
			title: 'Example Usage',
			children: codeBlock
		})}

		{#if props?.length && props.length > 0}
			{@render item({
				title: 'Props',
				description: 'The following props are available for this component.',
				children: propsSnippet
			})}
		{/if}
	</div>
{/if}

{#snippet item(opts: {
	title: string;
	description?: string;
	children: Snippet;
	action?: { label: string; onclick: () => void | Promise<void> };
})}
	<Item.Root variant="muted">
		<Item.Content>
			<Item.Title><h2>{opts.title}</h2></Item.Title>
			<Item.Description>{opts.description}</Item.Description>
			<div class="mt-4">
				{@render opts.children()}
			</div>
		</Item.Content>
		{#if opts.action}
			<Item.Actions>
				<Button variant="outline" size="sm">Open</Button>
			</Item.Actions>
		{/if}
	</Item.Root>
{/snippet}

{#snippet codeBlock()}
	<div
		class="relative mx-auto max-h-96 w-full max-w-225 overflow-hidden rounded-lg border bg-background"
	>
		<div class="w-full overflow-auto">
			<HighlightSvelte
				langtag
				let:highlighted
				code={code.replaceAll('registry/ui', 'components/ui')}
			>
				<div class="max-h-96 overflow-auto">
					<LineNumbers hideBorder {highlighted} wrapLines />
				</div>
			</HighlightSvelte>
		</div>

		<Button
			onclick={() => {
				navigator.clipboard.writeText(code.replaceAll('registry/ui', 'components/ui'));
				toast.info('Code copied to clipboard!');
			}}
			class="absolute top-4 right-4 z-50 cursor-pointer text-muted-foreground active:scale-95"
			variant="ghost"
			size="icon-sm"
		>
			<Copy />
		</Button>
	</div>
{/snippet}

{#snippet installSnippet()}
	<InstallCommand {name} />
{/snippet}

{#snippet propsSnippet()}
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Value</Table.Head>
				<Table.Head class="text-end">Description</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each props as p (p.value)}
				<Table.Row>
					<Table.Cell class="font-medium">
						<p>
							{p.value}
							{#if p.required}
								<span class="text-destructive">*</span>
							{/if}
						</p>
					</Table.Cell>
					<Table.Cell class="text-end">
						<Highlight
							class="ml-auto w-fit overflow-hidden rounded"
							language={typescript}
							code={p.type}
						/>
						<pre class="mt-2 text-muted-foreground">{p.description}</pre>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/snippet}
