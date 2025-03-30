export const LINKS = {
  SEARCH: { label: '도서 검색', href: '/' },
  LIKED: { label: '내가 찜한 책', href: '/liked' }
} as const;

export const LINK_LIST = Object.values(LINKS);

export const DEFAULT_LINK_HREF = LINKS.SEARCH.href;
