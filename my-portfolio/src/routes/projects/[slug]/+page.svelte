<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="prose lg:prose-xl mx-auto">
	<h1>{data.metadata.title}</h1>
	<p class="text-gray-500">Published on: {data.metadata.date}</p>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each data.metadata.tags as tag}
			<span class="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
		{/each}
	</div>
	<div class="mt-8">
		<svelte:component this={data.content} />
	</div>
</article> 