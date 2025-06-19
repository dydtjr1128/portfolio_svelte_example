---
title: '두 번째 프로젝트: 블로그 시스템'
date: '2023-11-15'
description: 'mdsvex를 활용하여 만든 간단한 블로그 시스템입니다. 포스트를 동적으로 불러옵니다.'
tags: ['SvelteKit', 'mdsvex', 'Blog']
---

## 프로젝트 목표

Markdown 파일만 추가하면 자동으로 포스트가 생성되는 블로그 시스템을 구축하는 것이 목표입니다.

## 핵심 로직

SvelteKit의 `load` 함수와 `import.meta.glob`을 사용하여 `src/lib/projects` 폴더 내의 모든 마크다운 파일을 동적으로 불러옵니다. 