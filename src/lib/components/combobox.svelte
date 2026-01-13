<script lang="ts" generics="T extends Record<string, any>">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import { tick, type ComponentProps } from 'svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { browser } from '$app/environment';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		placeholder?: string;
		labelKey: Extract<keyof T, string>;
		valueKey: Extract<keyof T, string>;
		records: (T & Record<Props['labelKey'], string> & Record<Props['valueKey'], string>)[];
		value?: string;
		class?: string;
		onValueChange?: (params: { value?: string; record: T }) => unknown | Promise<unknown>;
	} & Omit<ComponentProps<typeof Button>, 'type' | 'class'>;

	let {
		placeholder = 'Select an option',
		labelKey,
		valueKey,
		records,
		class: className,
		value = $bindable(),
		onValueChange,
		...restProps
	}: Props = $props();

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	let ref = $state<HTMLElement>(null!);

	const selectedValue = $derived(records.find((r) => r[valueKey] === value)?.[labelKey]);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}

	$effect(() => {
		if (browser) {
			ref?.style?.setProperty('width', `${triggerRef?.offsetWidth}px`);
		}
	});
</script>

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={triggerRef}>
		{#snippet child({ props })}
			<Button
				{...restProps}
				type="button"
				{...props}
				variant="outline"
				class={cn('justify-between', className)}
				role="combobox"
				aria-expanded={open}
			>
				{selectedValue || 'Select an option...'}
				<ChevronsUpDownIcon class="opacity-50" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content bind:ref class="w-50 p-0">
		<Command.Root>
			<Command.Input {placeholder} />
			<Command.List>
				<Command.Empty>No framework found.</Command.Empty>
				<Command.Group value="frameworks">
					{#each records as record (record[valueKey])}
						<Command.Item
							value={record[valueKey]}
							onSelect={() => {
								value = record[valueKey];
								onValueChange?.({ value, record });
								closeAndFocusTrigger();
							}}
						>
							<CheckIcon class={cn(value !== record[valueKey] && 'text-transparent')} />
							{record[labelKey]}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
