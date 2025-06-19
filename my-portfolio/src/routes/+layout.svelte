<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<div class="h-screen flex bg-gray-50">
	<!-- 좌측 사이드바 -->
	<aside class="flex-[4] bg-white border-r border-gray-200 flex flex-col">
		<!-- 연락처 정보 -->
		<div class="p-8 border-b border-gray-200">
			<div class="space-y-3 text-sm text-gray-600">
				<a href="mailto:your-email@example.com" class="flex items-center gap-2 hover:text-gray-800 transition-colors">
					<span>Email</span>
					<span class="text-gray-400">📧</span>
				</a>
				<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-gray-800 transition-colors">
					<span>LinkedIn</span>
					<span class="text-gray-400">💼</span>
				</a>
			</div>
		</div>

		<!-- 프로젝트 목록 -->
		<nav class="flex-1 p-8 overflow-auto">
			<div class="space-y-6">
				<a 
					href="/" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					NORTON : BRAD PITT YOURSELF
					<div class="text-xs text-gray-400 mt-1">Art / Awards Cannes</div>
				</a>

				<a 
					href="/projects/heinz" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/heinz' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					HEINZ : THE BREAKFAST PACKAGE
					<div class="text-xs text-gray-400 mt-1">Clio Awards Canva / Bronze</div>
				</a>

				<a 
					href="/projects/vaseline" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/vaseline' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					VASELINE : BLUE SHIELD
					<div class="text-xs text-gray-400 mt-1">Creativity Awards Bronze / ANDY Awards Shortlist</div>
				</a>

				<a 
					href="/projects/google-cloud" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/google-cloud' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					GOOGLE CLOUD : THE HABITAT PROJECT
					<div class="text-xs text-gray-400 mt-1">FWA Awards Sotd</div>
				</a>

				<a 
					href="/projects/apple" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/apple' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					WHAT IF APPLE TOLD MY STORY
					<div class="text-xs text-gray-400 mt-1">Advertising Campaign</div>
				</a>

				<a 
					href="/projects/airbnb" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/airbnb' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					AIRBNB ODDYSSEY
					<div class="text-xs text-gray-400 mt-1">Advertising Campaign</div>
				</a>

				<a 
					href="/projects/crocs" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/crocs' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					CROCS YOUR WAY
					<div class="text-xs text-gray-400 mt-1">Advertising Campaign</div>
				</a>

				<a 
					href="/projects/mojito" 
					class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/projects/mojito' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
				>
					MOJITO
					<div class="text-xs text-gray-400 mt-1">Apple Top 22 apps recommended for 2020</div>
				</a>

				<div class="mt-12 pt-8 border-t border-gray-200">
					<a 
						href="/about" 
						class="block text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/about' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
					>
						ABOUT
					</a>
					<a 
						href="/contact" 
						class="block text-sm hover:text-gray-600 transition-colors mt-4 {$page.url.pathname === '/contact' ? 'text-gray-900 font-medium' : 'text-gray-800'}"
					>
						CONTACT
					</a>
				</div>
			</div>
		</nav>
	</aside>

	<!-- 우측 콘텐츠 영역 -->
	<main class="flex-[6] bg-gray-100 relative overflow-hidden">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
</style>
