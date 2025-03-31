# 프로젝트 개요

- 카카오 책 검색 API 기반의 책 검색 및 찜하기 리스트를 관리할 수 있는 서비스
- React 기반의 SPA 방식의 웹 페이지로 구성  

# 실행 방법 및 환경 설정

## 실행 방법
```
git clone https://github.com/candymask0712/book-search-project.git
pnpm install
pnpm dev
```

## 환경 설정
- Node v20 이상
- Pnpm v9 이상  

# 강조 하고 싶은 기능 및 코드

## 사용자 경험(UX) 개선

### 사용자 경험을 위한 UI 개선
-  ErrorBoundary, Suspense 설정
  ```tsx
  // main.tsx

  createRoot(document.getElementById('root')!).render(
    // ...
    <ErrorBoundary fallback={<DefaultFallback />}>
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
    // ...
  );
  ```
- 다양한 케이스의 데이터를 고려한 CSS 작성
  - 제목이나 저자명의 데이터 길이가 긴 경우
  - 가격이 매우 비싼 경우
  - 썸네일 이미지가 없는 경우
  - 가격데이터가 없는 경우
  - 저자명이 없는 경우
  <img width="830" alt="Image" src="https://github.com/user-attachments/assets/f1c66dcd-76fd-4fca-a624-9b0f4252a7eb" />
  <img width="830" alt="Image" src="https://github.com/user-attachments/assets/bfd5e7b5-24da-4ec1-b140-d1bc56914be6" />
  <img width="830" alt="Image" src="https://github.com/user-attachments/assets/b03e1b7d-92cf-41fb-9d39-dff585150b89" />
  <img width="830" alt="Image" src="https://github.com/user-attachments/assets/4fae4e62-8f43-4905-b279-222cc1312f5e" />
<img width="835" alt="Image" src="https://github.com/user-attachments/assets/9bc08ee1-18f4-4761-a499-513ef4d1233c" />

## 프로젝트 유지보수성 개선

### 타입스크립트를 통한 개발자 경험 개선
- Literal Union 타입과 Template Literal 타입을 사용하여 휴먼에러 예방

  ```ts
  type ValidFontWeight = '100' | '200' ...
  type PxSize = `${number}px`;

  function createFontSize(size: PxSize, fontWeight: ValidFontWeight) {
    const option: [string, { lineHeight: string; fontWeight: string }] = [
      size,
      { lineHeight: size, fontWeight: fontWeight }
    ];
    return option;
  }

  const fontSize = {
    title1: createFontSize('24px', '700'),
    title2: createFontSize('22px', '700'),
    // ...
  };

  export default {
    // ...
      extend: {
          // ...
        fontSize
      }
    // ...
  }
  ```
- 값 기반의 타입 생성을 통한 유지보수성 강화 
  - 기능 또는 페이지 추가 시 최소한의 수정으로 작성할 수 있도록 구성
  ```ts
  // nav.ts
  export const LINKS = {
    SEARCH: { label: '도서 검색', href: '/' },
    LIKED: { label: '내가 찜한 책', href: '/liked' }
  } as const;

  export const LINK_LIST = Object.values(LINKS);

  export const DEFAULT_LINK_HREF = LINKS.SEARCH.href;
  ```
  ```ts
  // nav.ts
  import { LINK_LIST } from '../constants/nav';

  export type LinkType = (typeof LINK_LIST)[number];
  ```

# 폴더 구조 

```
.
├── README.md
├── eslint.config.js
├── index.html            # 프로젝트 언어설정(ko), 폰트, meta 정보 
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   └── book-favicon.svg
├── src
│   ├── App.css
│   ├── App.tsx           # 전체 페이지의 layout 관리
│   ├── NotFound.tsx      # 404페이지
│   ├── api
│   │   ├── instance.ts   # axios의 interceptor를 이용한 공통 헤더 설정
│   │   └── kakako        # kakao API 요청 시 필요한 header, URL, api함수 관리
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── atoms            # 로컬스토리지 값 관리를 위한 jotai의 atom
│   │   ├── history.ts
│   │   └── liked.ts
│   ├── components       # 특정 페이지 또는 프로젝트 전체에서 사용하는 공통 컴포넌트 관리
│   │   ├── header
│   │   ├── search
│   │   └── shared
│   ├── constants        # 프로젝트 유지보수를 위한 공통의 상수 관리
│   │   ├── common.ts
│   │   ├── nav.ts
│   │   ├── search.ts
│   │   └── styles.ts
│   ├── hooks            # 커스텀 훅 (좋아요, 무한스크롤 등)
│   │   ├── useInfiniteLikedBooks.ts
│   │   ├── useInfiniteScroll.ts
│   │   └── useSearchBooks.ts
│   ├── index.css            # CSS reset, 폰트 관리
│   ├── main.tsx             # ErrorBoundary, Suspense, QueryClient 관리
│   ├── pages                # 페이지 컴포넌트는 '[route name]Page.tsx'의 형태로 관리
│   │   ├── LikedPage.tsx
│   │   └── SearchPage.tsx
│   ├── router.tsx           # 라우트 관리
│   ├── types                # 프로젝트에 필요한 공통 타입 관리
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   └── link.types.ts
│   └── vite-env.d.ts        # SVG 파일 리액트 컴포넌트로 쓸 수 있도록 설정
├── tailwind.config.ts       # 공통 스타일링 변수 관리 (Color Palette, Typography 등)
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

# 라이브러리 선택 이유

## Vite
- 빠른 번들링 속도와 개발 서버 구동

## React-hooks
- 프로젝트에 유용한 커스텀 훅 제공

## Jotai
- atom 기반의 간단한 전역 상태 관리
- React Suspense, 비동기 상태 등과의 호환성 우수

## Tailwind
- 사전에 정해진 유틸리티 클래스를 통한 스타일링 작업 생산성 향상

## classnames
- 조건부 로직의 가독성 향상
