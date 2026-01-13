<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Separator } from '$lib/components/ui/separator';

	const faqs = [
		{
			q: 'Can I use these components in production?',
			a: 'Yes. This project was created because I needed these components for my own apps. There will never be a charge for using them in your projects.'
		},
		{
			q: 'Do I need Tailwind?',
			a: 'Tailwind is required for ShadCN, thus it is required for more-cn components as well.'
		},
		{
			q: 'How do I customize the look?',
			a: 'Update the utility classes or your projects .css files to override styles as needed.'
		}
	];
</script>

<div class="md:p-4">
	<section class="relative overflow-hidden">
		<div class="relative grid gap-10">
			<div class="flex flex-col gap-6">
				<h1 class="md:text-5xl">morecn-svelte</h1>
				<h2 class="font-semibold tracking-tight md:text-3xl">
					Composable Svelte components built on shadcn-svelte foundations.
				</h2>
				<p class="text-destructive md:text-lg">
					This library is a work in progress. Component APIs and implementations may change without
					warning. Use at your own risk.
				</p>
				<div class="flex flex-wrap gap-3">
					<Button href="/components/combobox" size="lg">Browse components</Button>
				</div>
			</div>
		</div>
	</section>
	<Separator class="my-6" />
	<section class="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
		<div class="flex flex-col gap-4">
			<h2 class="text-3xl font-semibold tracking-tight">FAQ</h2>
			<p class="text-muted-foreground">
				Quick answers to help you decide if this component layer is the right fit.
			</p>
		</div>
		<Accordion.Root type="single" class="w-full">
			{#each faqs as faq, index}
				<Accordion.Item value={`faq-${index}`}>
					<Accordion.Trigger>{faq.q}</Accordion.Trigger>
					<Accordion.Content class="text-muted-foreground">{faq.a}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</section>
</div>
