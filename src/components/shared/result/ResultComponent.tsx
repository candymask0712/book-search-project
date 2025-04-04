import NoResult from '../../search/NoResult';
import ResultCounter from './ResultCounter';
import ResultList from './ResultList';
import { Document } from '../../../types/api.types';

interface Props {
  subTitle: string;
  data: Document[] | undefined;
  totalCount: number;
  noResultText: string;
}

const ResultComponent = ({
  subTitle,
  data,
  totalCount,
  noResultText
}: Props) => {
  return (
    <div className="w-[960px] flex flex-col">
      <div className="mb-8">
        <ResultCounter subTitle={subTitle} count={totalCount} />
      </div>
      <div className="w-[960px] mx-auto flex items-center justify-center w-full">
        <div className="w-[960px] mt-4">
          {data && data?.length > 0 ? (
            <ResultList data={data} />
          ) : (
            <div className="flex flex-col justify-center items-center w-full mt-24">
              <NoResult text={noResultText} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
