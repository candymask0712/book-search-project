import React, { useEffect, useRef } from 'react';

interface UseInfiniteScrollParams {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  threshold?: number;
}

export function useInfiniteScroll<T extends HTMLElement>(
  fetchNextPage: UseInfiniteScrollParams['fetchNextPage'],
  hasNextPage: UseInfiniteScrollParams['hasNextPage'],
  isFetchingNextPage: UseInfiniteScrollParams['isFetchingNextPage'],
  threshold = 0.1
): React.RefObject<T | null> {
  const observerElem = useRef<T>(null);

  useEffect(() => {
    const element = observerElem.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, threshold]);

  return observerElem;
}
