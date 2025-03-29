import { useInfiniteQuery } from '@tanstack/react-query';
import { searchBooks } from '../api/kakako/kakaoApi';
import { SearchBooksResponse, SearchBooksParams } from '../types/api.types';

interface UseSearchBooksParams extends Omit<SearchBooksParams, 'page'> {
  query: string;
  page?: number;
}

export const useInfiniteSearchBooks = ({
  query,
  target
}: UseSearchBooksParams) => {
  return {
    ...useInfiniteQuery<SearchBooksResponse, Error>({
      queryKey: ['searchBooks', query, target],
      queryFn: ({ pageParam }) => {
        const page = isNaN(Number(pageParam)) ? 1 : Number(pageParam);
        return searchBooks({ query, target, page });
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
