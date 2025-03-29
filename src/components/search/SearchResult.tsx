import NoResult from './NoResult';
import SearchResultCounter from './SearchResultCounter';
import SearchResultList from './SearchResultList';
import { Document } from '../../types/api.types';

interface Props {
  data: Document[] | undefined;
}

const SearchResult = ({ data }: Props) => {
  return (
    <div className="w-[960px] flex flex-col mt-4">
      <div className="mb-4">
        <SearchResultCounter title="도서 검색 결과" count={data?.length || 0} />
      </div>
      <div>
        {data && data?.length > 0 ? (
          <SearchResultList data={data} />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <NoResult />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
