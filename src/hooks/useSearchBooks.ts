import { useInfiniteQuery } from '@tanstack/react-query';
import { searchBooks } from '../api/kakako/kakaoApi';
import { SearchBooksResponse, SearchTarget } from '../types/api.types';

interface UseSearchBooksParams {
  searchState: {
    query: string;
    searchTarget: SearchTarget;
  };
  page?: number;
}

export const useInfiniteSearchBooks = ({
  searchState
}: UseSearchBooksParams) => {
  const { query, searchTarget } = searchState;
  return {
    ...useInfiniteQuery<SearchBooksResponse, Error>({
      queryKey: ['searchBooks', query, searchTarget],
      queryFn: ({ pageParam }) => {
        const page = isNaN(Number(pageParam)) ? 1 : Number(pageParam);
        return searchBooks({ query, target: searchTarget, page });
      },
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.meta.is_end) {
          return pages.length + 1;
        }
        return undefined;
      },
      enabled: Boolean(query),
      initialPageParam: 1
    }),
    history
  };
};
