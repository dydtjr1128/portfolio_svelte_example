# 개인 포트폴리오 웹사이트: 프로젝트 요구사항 명세서 (PRD)

## 1. 개요 및 목표 (Introduction & Purpose)

-   **프로젝트:** Bun과 SvelteKit 기반의 개인 포트폴리오 웹사이트
-   **목표:** 잠재적 고용주, 클라이언트, 동료들에게 자신의 프로젝트, 기술, 경험을 효과적으로 보여주는 것을 목표로 합니다. 이 웹사이트는 디지털 이력서이자 전문적인 온라인 활동의 중심 허브 역할을 합니다.

## 2. 타겟 사용자 (Target Audience)

-   기술 채용 담당자, 인사 관리자
-   잠재적 클라이언트 (프리랜서의 경우)
-   동료 개발자 및 협업 제안자
-   자신의 작업물에 관심을 가진 모든 방문자

## 3. 주요 기능 (Features)

### P0 (필수 기능)

-   **메인 페이지 (Home):** 간결한 자기소개, 전문적인 프로필 사진, 시선을 끄는 헤드라인을 포함합니다.
-   **소개 페이지 (About):** 자신의 배경, 보유 기술, 관심사, 개발자로서의 여정에 대한 상세한 설명을 제공합니다.
-   **프로젝트 페이지 (Projects):** 프로젝트 목록을 보여줍니다. 각 프로젝트는 설명, 사용 기술, 라이브 데모 링크, 소스 코드(GitHub) 링크를 포함하며, 클릭 시 상세 페이지로 이동합니다.
-   **연락처 페이지 (Contact):** 이메일 주소, 소셜 프로필(LinkedIn, GitHub 등) 링크 등 연락할 수 있는 방법을 제공합니다.
-   **반응형 디자인:** 데스크톱, 태블릿, 모바일 등 모든 기기에서 완벽하게 보이고 작동해야 합니다.

### P1 (있으면 좋은 기능)

-   **블로그 (Blog):** 기술 아티클을 작성하고 지식을 공유하는 공간을 마련합니다.
-   **이력서 페이지 (Resume/CV):** 온라인 이력서 페이지를 만들고, PDF 다운로드 기능을 포함합니다.
-   **테마 변경 (Theme Switcher):** 라이트/다크 모드를 전환할 수 있는 기능을 제공합니다.

### P2 (추가 고려 기능)

-   **인터랙티브 요소/애니메이션:** 사이트를 더 매력적으로 만들기 위한 동적인 요소를 추가합니다.
-   **검색 기능:** 프로젝트나 블로그 게시물을 검색하는 기능을 구현합니다.

## 4. 디자인 및 사용자 경험 (Design & UX)

-   **테마:** 모던하고, 깔끔하며, 전문적인 느낌을 추구합니다.
-   **레이아웃:** 직관적인 내비게이션 구조로 사용자가 정보를 쉽게 찾을 수 있도록 설계합니다.
-   **색상 팔레트:** 자신만의 퍼스널 브랜드를 나타내는 일관된 색상 체계를 사용합니다.
-   **타이포그래피:** 가독성 높고 전문적인 폰트를 사용합니다.
-   **성능:** SvelteKit 및 정적 호스팅을 통해 빠른 로딩 속도를 확보하고 최적화합니다.

## 5. 기술 스택 및 요구사항 (Technical Stack & Requirements)

-   **프레임워크:** SvelteKit
-   **런타임/번들러/패키지 매니저:** Bun
-   **스타일링:** Tailwind CSS (SvelteKit과 궁합이 좋고 생산성이 높음) 또는 일반 CSS/SCSS
-   **배포:** Vercel, Netlify, GitHub Pages 등 정적 사이트 호스팅 플랫폼
-   **콘텐츠 관리:** 프로젝트나 블로그 글은 Markdown 파일을 사용하여 코드베이스에서 직접 관리합니다.

## 6. 성공 지표 (Success Metrics)

-   웹사이트 순 방문자 수 및 평균 페이지 체류 시간
-   프로젝트 링크(라이브 데모, GitHub) 클릭률
-   연락처 페이지를 통한 문의 수
-   방문자 및 채용 담당자의 긍정적인 피드백
-   Lighthouse/PageSpeed Insights 점수 (성능, 접근성, SEO 항목에서 높은 점수 목표)

## 7. 개발 로드맵 (Roadmap)

1.  **1단계 (프로젝트 설정 및 핵심 페이지):**
    -   Bun으로 SvelteKit 프로젝트를 초기화하고 기본 폴더 구조를 설정합니다.
    -   메인, 소개, 연락처 페이지를 구현합니다.
2.  **2단계 (프로젝트 페이지):**
    -   프로젝트 목록 및 상세 페이지 구조를 구현합니다.
    -   Markdown을 활용하여 초기 프로젝트 콘텐츠를 추가합니다.
3.  **3단계 (스타일링 및 반응형 디자인):**
    -   Tailwind CSS를 이용한 전체적인 스타일링을 적용합니다.
    -   모든 기기에서 디자인이 깨지지 않도록 반응형 디자인을 적용합니다.
4.  **4단계 (추가 기능 및 배포):**
    -   블로그, 이력서 페이지 등 P1 기능을 구현합니다.
    -   Vercel 또는 Netlify에 초기 버전을 배포합니다.
5.  **5단계 (고도화 및 반복):**
    -   P2 기능 (애니메이션 등)을 추가합니다.
    -   사용자 피드백을 수집하고 지속적으로 개선합니다. 