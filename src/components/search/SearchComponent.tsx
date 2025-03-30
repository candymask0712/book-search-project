import { useState } from 'react';
import DefaultButton from '../shared/button/Button';
import SearchBar from './SearchBar';
import DetailSearchModal from './DetailSearch';
import { SearchTarget } from '../../types/api.types';

interface Props {
  query: string;
  setQuery: (query: string) => void;
  searchTarget: SearchTarget;
  setSearchTarget: (target: SearchTarget) => void;
}

const SearchComponent = ({
  query,
  setQuery,
  searchTarget,
  setSearchTarget
}: Props) => {
  const [isDetailSearchOpen, setIsDetailSearchOpen] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="flex items-center w-24 relative">
        <DefaultButton
          size="small"
          variant="secondary"
          onClick={() => setIsDetailSearchOpen(true)}
        >
          상세검색
        </DefaultButton>
        {isDetailSearchOpen && (
          <DetailSearchModal
            onClose={() => setIsDetailSearchOpen(false)}
            searchTarget={searchTarget}
            query={query}
            setQuery={setQuery}
            setSearchTarget={setSearchTarget}
          />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
