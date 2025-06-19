/**
 * @typedef {Object} ProjectMetadata
 * @property {string} title
 * @property {string} date
 * @property {string} description
 * @property {string[]} tags
 */

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const projectFiles = import.meta.glob('/src/lib/projects/*.md', { eager: true });

	const projects = await Promise.all(
		Object.entries(projectFiles).map(async ([path, resolver]) => {
			const { metadata } = /** @type {{ metadata: ProjectMetadata }} */ (resolver);
			const slug = path.split('/').pop()?.slice(0, -3);

			return { ...metadata, slug };
		})
	);

	// 날짜 내림차순으로 정렬
	const sortedProjects = projects.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return { projects: sortedProjects };
} 