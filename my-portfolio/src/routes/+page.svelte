<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let nameText = '';
	let titleVisible = false;
	let iconsVisible = false;
	
	const fullName = 'YongSeok Choi';
	let nameIndex = 0;

	onMount(() => {
		// 타이핑 효과
		const typeInterval = setInterval(() => {
			if (nameIndex < fullName.length) {
				nameText += fullName[nameIndex];
				nameIndex++;
			} else {
				clearInterval(typeInterval);
				// 이름 타이핑이 끝나면 다른 요소들 표시
				setTimeout(() => {
					titleVisible = true;
					setTimeout(() => {
						iconsVisible = true;
					}, 300);
				}, 500);
			}
		}, 80);

		return () => clearInterval(typeInterval);
	});
</script>

<svelte:head>
	<title>Portfolio - 개발자 포트폴리오</title>
</svelte:head>

<div class="h-full flex items-center justify-center relative">
	<!-- 우상단 네비게이션 아이콘 -->
	<div class="absolute top-8 right-8 flex items-center gap-4 transition-opacity duration-500 {iconsVisible ? 'opacity-100' : 'opacity-0'}">
		<button class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-all duration-200 hover:scale-110">
			<span class="text-xs">💼</span>
		</button>
		<button class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-all duration-200 hover:scale-110">
			<span class="text-xs">👤</span>
		</button>
	</div>

	<!-- 메인 콘텐츠 -->
	<div class="text-center">
		<h1 class="text-7xl font-light tracking-wider text-gray-900 mb-4 min-h-[1.2em] flex items-center justify-center">
			{nameText}<span class="animate-pulse">|</span>
		</h1>
		
		<!-- 오른쪽 상단에 직책 표시 -->
		<div class="absolute top-8 right-40 bg-yellow-300 px-6 py-2 rounded-sm transition-all duration-500 transform {titleVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}">
			<span class="text-sm font-medium text-gray-900 tracking-wide">WEB DEVELOPER</span>
		</div>
	</div>

	<!-- 하단 중앙에 작은 점 -->
	<div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000 {iconsVisible ? 'opacity-100' : 'opacity-0'}">
		<div class="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
	</div>
</div>

<style>
	h1 {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		letter-spacing: 0.1em;
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
