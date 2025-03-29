import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '../api/kakako/kakaoApi';
import { SearchBooksResponse, SearchBooksParams } from '../types/api.types';
import { useState, useEffect } from 'react';
import { debounce } from 'lodash-es';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';

interface UseSearchBooksParams extends Omit<SearchBooksParams, 'page'> {
  query: string;
  page?: number;
}

const searchHistoryAtom = atomWithStorage<string[]>('searchHistory', []);

export const useSearchBooks = ({
  query,
  target,
  page = 1
}: UseSearchBooksParams) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [history, setHistory] = useAtom(searchHistoryAtom);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedQuery(query);
      if (query.trim() !== '' && !history.includes(query)) {
        const newHistory = [...history];
        newHistory.push(query);
        while (newHistory.length > 10) {
          newHistory.shift();
        }
        setHistory(newHistory);
      }
    }, 500);

    handler();

    return () => {
      handler.cancel();
    };
  }, [query, history, setHistory]);

  const removeHistoryItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
  };

  return {
    ...useQuery<SearchBooksResponse, Error>({
      queryKey: ['searchBooks', debouncedQuery, target, page],
      queryFn: () => searchBooks({ query: debouncedQuery, target, page }),
      enabled: debouncedQuery.trim().length > 0
    }),
    history,
    removeHistoryItem
  };
};
