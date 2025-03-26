export const LINKS = [
  { label: '도서검색', href: '/' },
  { label: '나의컬렉션', href: '/collection' }
] as const;

export const DEFAULT_LINK_HREF = LINKS[0].href;
