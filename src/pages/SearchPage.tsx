import { useState } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import LoadingFallback from '../components/fallback/LoadingFallback';
import { useInfiniteSearchBooks } from '../hooks/useSearchBooks';
import { SearchTarget } from '../types/api.types';
import ResultComponent from '../components/shared/result/ResultComponent';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { LINKS } from '../constants/nav';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchTarget, setSearchTarget] = useState<SearchTarget>('title');

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteSearchBooks({ query, target: searchTarget });

  const observerElem = useInfiniteScroll<HTMLDivElement>(
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  );

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (error) {
    throw Error('검색 오류');
  }

  const documents = data?.pages.flatMap(page => page.documents) || [];

  return (
    <div className="flex flex-col gap-2">
      query: {query}
      <div className="flex flex-col w-[568px] gap-6 mb-4">
        <h1 className="text-title2">{LINKS.SEARCH.label}</h1>
        <SearchComponent
          query={query}
          setQuery={setQuery}
          searchTarget={searchTarget}
          setSearchTarget={setSearchTarget}
        />
      </div>
      <ResultComponent
        subTitle="도서 검색 결과"
        data={documents}
        totalCount={data?.pages[0].meta.total_count || 0}
      />
      <div ref={observerElem} className="h-1 w-full" />
      {isFetchingNextPage && <LoadingFallback />}
    </div>
  );
};

export default SearchPage;
