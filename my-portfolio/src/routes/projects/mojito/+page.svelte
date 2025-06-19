<svelte:head>
	<title>MOJITO - 포트폴리오</title>
</svelte:head>

<div class="h-full p-16 overflow-auto">
	<div class="max-w-4xl">
		<div class="mb-8">
			<h1 class="text-4xl font-light text-gray-900 mb-4 tracking-wide">MOJITO</h1>
			<p class="text-lg text-gray-500">Apple Top 22 apps recommended for 2020</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
			<!-- 프로젝트 이미지 영역 -->
			<div class="lg:col-span-2">
				<div class="bg-gradient-to-br from-green-100 to-lime-100 aspect-video rounded mb-8 flex items-center justify-center">
					<span class="text-green-600">모바일 앱 UI</span>
				</div>
				
				<div class="grid grid-cols-3 gap-4">
					<div class="bg-green-50 aspect-[9/16] rounded flex items-center justify-center">
						<span class="text-green-600 text-xs">홈 화면</span>
					</div>
					<div class="bg-green-50 aspect-[9/16] rounded flex items-center justify-center">
						<span class="text-green-600 text-xs">레시피</span>
					</div>
					<div class="bg-green-50 aspect-[9/16] rounded flex items-center justify-center">
						<span class="text-green-600 text-xs">설정</span>
					</div>
				</div>
			</div>
			
			<!-- 프로젝트 정보 -->
			<div class="space-y-8">
				<div>
					<h2 class="text-lg font-medium text-gray-900 mb-4">프로젝트 개요</h2>
					<p class="text-gray-700 leading-relaxed">
						모히토와 다양한 칵테일 레시피를 제공하는 모바일 앱입니다. 
						사용자 친화적인 인터페이스와 아름다운 비주얼로 
						Apple의 주목을 받아 2020년 추천 앱으로 선정되었습니다.
					</p>
				</div>
				
				<div>
					<h3 class="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">플랫폼</h3>
					<div class="flex flex-wrap gap-2">
						<span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded">iOS</span>
						<span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded">Swift</span>
						<span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded">SwiftUI</span>
					</div>
				</div>
				
				<div>
					<h3 class="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">주요 기능</h3>
					<ul class="text-gray-700 space-y-1 text-sm">
						<li>• 200+ 칵테일 레시피</li>
						<li>• 재료별 검색 기능</li>
						<li>• 개인화된 즐겨찾기</li>
						<li>• 단계별 제조 가이드</li>
					</ul>
				</div>
				
				<div>
					<h3 class="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">성과</h3>
					<p class="text-gray-700">Apple Top 22 Apps 2020 선정</p>
				</div>
				
				<div>
					<h3 class="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">다운로드</h3>
					<a href="#" class="text-gray-700 hover:text-gray-900 underline">App Store</a>
				</div>
			</div>
		</div>
	</div>
</div> 