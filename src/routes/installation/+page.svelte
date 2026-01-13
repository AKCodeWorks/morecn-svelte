<script lang="ts">
	import typescript from 'svelte-highlight/languages/typescript';
	import shell from 'svelte-highlight/languages/shell';
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import Highlight from 'svelte-highlight';
	import InstallCommand from '$lib/components/install-command.svelte';
</script>

<svelte:head>
	{@html github}
</svelte:head>
<div class=" flex w-full max-w-3xl flex-col gap-6 p-4">
	<h1 class="text-3xl font-semibold tracking-tight">Installation</h1>
	<p class="text-muted-foreground">
		First, install shadcn-svelte in your SvelteKit project. Then you can add components from this
		registry. If these instructions do not work when trying to init shadcn-svelte, you can view the
		latest <a
			class="text-primary underline"
			href="https://www.shadcn-svelte.com/docs/installation/sveltekit">instructions here</a
		>.
	</p>

	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Create project & install shadcn-svelte</h2>
		<p class="text-muted-foreground">
			Use the SvelteKit CLI to create a new project with TailwindCSS.
		</p>
		<Highlight
			code={`pnpm dlx sv create my-app --add tailwindcss
npx sv create my-app --add tailwindcss
bun x sv create my-app --add tailwindcss`}
			language={shell}
		/>
	</section>

	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Setup path aliases</h2>
		<p class="text-muted-foreground">
			If you are not using the default alias <code>$lib</code>, update your
			<code>svelte.config.js</code>.
		</p>

		<Highlight
			language={typescript}
			code={`const config = {
  // ... other config
  kit: {
    // ... other config
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
};`}
		/>
	</section>

	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Run the CLI</h2>
		<Highlight
			code={`pnpm dlx shadcn-svelte@latest init
npx shadcn-svelte@latest init
bun x shadcn-svelte@latest init`}
			language={shell}
		/>
	</section>

	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Configure components.json</h2>
		<p class="text-muted-foreground">You will be asked a few questions.</p>
		<Highlight
			code={`Which base color would you like to use?  Slate
Where is your global CSS file? (this file will be overwritten)  src/routes/layout.css
Configure the import alias for lib:  $lib
Configure the import alias for components:  $lib/components
Configure the import alias for utils:  $lib/utils
Configure the import alias for hooks:  $lib/hooks
Configure the import alias for ui:  $lib/components/ui`}
			language={shell}
		/>
	</section>

	<section class="space-y-3">
		<h2 class="text-xl font-semibold">Start Using morecn-svelte components</h2>
		<p class="text-muted-foreground">
			After installing shadcn-svelte, add any component from this registry:
		</p>

		<InstallCommand name="<component-name>" />
	</section>
</div>
