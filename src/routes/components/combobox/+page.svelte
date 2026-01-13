<script lang="ts">
	import exampleCode from '$lib/examples/combobox-example.svelte?raw';
	import ComboBoxExample from '$lib/examples/combobox-example.svelte';
	import Example from '$lib/examples/example.svelte';
</script>

<Example
	name="combobox"
	description="A searchable selection component with typesafety."
	title="Combobox"
	code={exampleCode}
	props={[
		{
			value: 'records',
			type: 'T[]',
			description: 'An array of records to display in the combobox.',
			required: true
		},
		{
			value: 'labelKey',
			type: 'Extract<keyof T, string>',
			description: 'The key of T used for the display label.',
			required: true
		},
		{
			value: 'valueKey',
			type: 'Extract<keyof T, string>',
			description: 'The key of T used for the selected value.',
			required: true
		},
		{
			value: 'onValueChange',
			type: '(args: { record: T | null; value: string }) => void | Promise<void>',
			description: 'Callback fired when the selected value changes.'
		},
		{
			value: 'value',
			type: 'string',
			description: 'The currently selected value (derived from valueKey).'
		},
		{
			value: 'restProps',
			type: 'ComponentProps<typeof Button>',
			description: 'All additional props are passed to the underlying Shadcn Button trigger.'
		}
	]}
>
	{#snippet component()}
		<ComboBoxExample />
	{/snippet}
</Example>
