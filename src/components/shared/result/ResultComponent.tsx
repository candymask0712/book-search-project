import NoResult from '../../search/NoResult';
import ResultCounter from './ResultCounter';
import SearchResultList from '../../search/SearchResultList';
import { Document } from '../../../types/api.types';

interface Props {
  subTitle: string;
  data: Document[] | undefined;
  totalCount: number;
}

const ResultComponent = ({ subTitle, data, totalCount }: Props) => {
  return (
    <div className="w-[960px] flex flex-col">
      <div className="mb-8">
        <ResultCounter subTitle={subTitle} count={totalCount} />
      </div>
      <div className="w-[960px] mx-auto flex items-center justify-center w-full">
        <div className="w-[960px] mt-4">
          {data && data?.length > 0 ? (
            <SearchResultList data={data} />
          ) : (
            <div className="flex flex-col justify-center items-center w-full mt-20">
              <NoResult />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
