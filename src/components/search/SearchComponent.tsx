import { Dispatch, SetStateAction, useState } from 'react';
import DefaultButton from '../shared/button/Button';
import SearchBar from './SearchBar';
import DetailSearchModal from './DetailSearch';
import { SearchTarget } from '../../types/api.types';

interface Props {
  searchState: {
    query: string;
    searchTarget: SearchTarget;
  };
  setSearchState: Dispatch<
    SetStateAction<{
      query: string;
      searchTarget: SearchTarget;
    }>
  >;
}

const SearchComponent = ({ searchState, setSearchState }: Props) => {
  const [isDetailSearchOpen, setIsDetailSearchOpen] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <SearchBar searchState={searchState} setSearchState={setSearchState} />
      <div className="flex items-center w-24 relative">
        <DefaultButton
          size="small"
          variant="lined"
          onClick={() => setIsDetailSearchOpen(true)}
        >
          상세검색
        </DefaultButton>
        {isDetailSearchOpen && (
          <DetailSearchModal
            searchState={searchState}
            onClose={() => setIsDetailSearchOpen(false)}
            setSearchState={setSearchState}
          />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
