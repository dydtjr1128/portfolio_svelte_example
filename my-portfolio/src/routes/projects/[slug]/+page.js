import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const project = await import(`../../../lib/projects/${params.slug}.md`);
		const { metadata } = project;
		const content = project.default;

		return {
			metadata,
			content
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
} 