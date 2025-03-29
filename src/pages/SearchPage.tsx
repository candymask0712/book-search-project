import { useState } from 'react';
import NoResult from '../components/search/NoResult';
import SearchComponent from '../components/search/SearchComponent';
import LoadingFallback from '../components/fallback/LoadingFallback';
import { useSearchBooks } from '../hooks/useSearchBooks';
import { SearchTarget } from '../types/api.types';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchTarget, setSearchTarget] = useState<SearchTarget>('author');
  const { data, isLoading, error, history, removeHistoryItem } = useSearchBooks(
    {
      query,
      target: searchTarget
    }
  );

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (error) {
    throw Error('검색 오류');
  }

  return (
    <div className="flex flex-col items-center ">
      <SearchComponent
        title="도서 검색"
        query={query}
        setQuery={setQuery}
        removeHistoryItem={removeHistoryItem}
        history={history}
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
      />
      {/* TODO: 검색 결과 표시 */}
      {data?.documents.length === 0 ? <NoResult /> : JSON.stringify(data)}
    </div>
  );
};

export default SearchPage;
