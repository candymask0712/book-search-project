import { useState } from 'react';
import SearchComponent from '../components/search/SearchComponent';

import { useInfiniteSearchBooks } from '../hooks/useSearchBooks';
import { SearchTarget } from '../types/api.types';
import ResultComponent from '../components/shared/result/ResultComponent';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { LINKS } from '../constants/nav';
import LoadingFallback from '../components/shared/fallback/LoadingFallback';

const SearchPage = () => {
  const [searchState, setSearchState] = useState<{
    query: string;
    searchTarget: SearchTarget;
  }>({
    query: '',
    searchTarget: 'title'
  });

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteSearchBooks({
    searchState
  });

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
      <div className="flex flex-col w-[568px] gap-6 mb-4">
        <h1 className="text-title2">{LINKS.SEARCH.label}</h1>
        <SearchComponent
          searchState={searchState}
          setSearchState={setSearchState}
        />
      </div>
      <ResultComponent
        subTitle="도서 검색 결과"
        data={documents}
        totalCount={data?.pages[0].meta.total_count || 0}
        noResultText="검색된 결과가 없습니다."
      />
      <div ref={observerElem} className="h-1 w-full" />
      {isFetchingNextPage && <LoadingFallback />}
    </div>
  );
};

export default SearchPage;
