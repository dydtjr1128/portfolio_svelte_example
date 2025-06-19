<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Projects - My Portfolio</title>
</svelte:head>

<section>
	<h1 class="text-3xl font-bold mb-4">My Projects</h1>
	<p class="mb-8">
		지금까지 진행했던 프로젝트 목록입니다. 각 프로젝트를 클릭하면 상세 내용을 확인할 수 있습니다.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each data.projects as project}
			<a
				href="/projects/{project.slug}"
				data-sveltekit-noprefetch
				class="block border rounded-lg p-6 hover:shadow-lg transition-shadow"
			>
				<h2 class="text-2xl font-bold mb-2">{project.title}</h2>
				<p class="text-gray-500 mb-2">{project.date}</p>
				<p>{project.description}</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section> 