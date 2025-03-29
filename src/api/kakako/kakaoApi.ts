import { SearchBooksParams, SearchBooksResponse } from '../../types/api.types';
import kakaoInstance from './kakaoBookInstance';

export const searchBooks = async ({
  query,
  page = 1,
  target
}: SearchBooksParams): Promise<SearchBooksResponse> => {
  console.log('query', query, page, target);
  const { data } = await kakaoInstance.get<SearchBooksResponse>(
    '/search/book',
    {
      params: {
        query,
        page,
        target
      }
    }
  );

  return data;
};
