<script lang="ts">
	import Combobox from '$lib/registry/ui/combobox/combobox.svelte';
	import { toast } from 'svelte-sonner';

	const records = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'system', label: 'System' }
	];

	let value = $state('');
</script>

<div class="flex justify-center p-6">
	<Combobox
		bind:value
		onValueChange={({ record, value }) => {
			console.log('Selected record:', record);
			toast.info(`Selected: ${record?.label} (value: ${value})`);
		}}
		class="w-72"
		{records}
		labelKey="label"
		valueKey="value"
	/>
</div>
