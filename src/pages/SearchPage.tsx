import { useEffect, useRef, useState } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import LoadingFallback from '../components/fallback/LoadingFallback';
import { useInfiniteSearchBooks } from '../hooks/useSearchBooks';
import { SearchTarget } from '../types/api.types';
import SearchResult from '../components/search/SearchResult';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchTarget, setSearchTarget] = useState<SearchTarget>('author');

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteSearchBooks({ query, target: searchTarget });

  console.log(data);

  const observerElem = useRef<HTMLDivElement>(null);

  console.log(fetchNextPage, hasNextPage, isFetchingNextPage);

  useEffect(() => {
    const element = observerElem.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (error) {
    throw Error('검색 오류');
  }

  const documents = data?.pages.flatMap(page => page.documents) || [];

  return (
    <div className="flex flex-col items-center">
      <SearchComponent
        title="도서 검색"
        query={query}
        setQuery={setQuery}
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
      />
      <SearchResult data={documents} />
      <div ref={observerElem} className="h-1 w-full" />
      {isFetchingNextPage && <LoadingFallback />}
    </div>
  );
};

export default SearchPage;
