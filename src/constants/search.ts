export enum SEARCH_TYPE_ENUM {
  title = 'title',
  author = 'author',
  publisher = 'publisher'
}

export const searchTargetKR = {
  [SEARCH_TYPE_ENUM.title]: '제목',
  [SEARCH_TYPE_ENUM.author]: '저자명',
  [SEARCH_TYPE_ENUM.publisher]: '출판사'
} as const;

export const searchTargetKeys = Object.values(SEARCH_TYPE_ENUM); // ['title', 'author', 'publisher']
export const defaultSearchTarget = SEARCH_TYPE_ENUM.title;
