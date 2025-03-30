// src/hooks/useInfiniteLikedBooks.ts
import { useState } from 'react';
import { useAtom } from 'jotai';
import { likedBooksAtom } from '../atoms/liked';
import { Document } from '../types/api.types';

export const useInfiniteLikedBooks = () => {
  const [likedBooks] = useAtom<Document[]>(likedBooksAtom);
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(likedBooks.length / itemsPerPage);
  const currentData = likedBooks.slice(0, page * itemsPerPage);

  const fetchNextPage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const hasNextPage = page < totalPages;
  const isFetchingNextPage = false;
  const totalCount = likedBooks.length;

  return {
    data: currentData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalCount
  };
};
