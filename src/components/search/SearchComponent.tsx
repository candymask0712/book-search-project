import DefaultButton from '../button/Button';
import SearchBar from './SearchBar';

interface Props {
  title: string;
  query: string;
  setQuery: (query: string) => void;
  removeHistoryItem: (index: number) => void;
  history: string[];
}

const SearchComponent = ({
  title,
  query,
  setQuery,
  removeHistoryItem,
  history
}: Props) => {
  console.log(title, query, history);

  return (
    <div className="flex flex-col gap-4 w-[568px]">
      <h1>{title}</h1>
      <div className="flex flex-row gap-4">
        <SearchBar
          query={query}
          setQuery={setQuery}
          removeHistoryItem={removeHistoryItem}
          history={history}
        />
        <div className="flex items-center w-24">
          <DefaultButton size="small" variant="secondary" onClick={() => {}}>
            상세검색
          </DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
