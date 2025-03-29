import { Document } from '../../types/api.types';
import Button from '../shared/button/Button';

interface Props {
  data: Document[];
}

const SearchResultList = ({ data }: Props) => {
  return (
    <div className="w-[960px]">
      {data?.map(document => {
        return (
          <div className="w-full mb-4">
            <div className="flex justify-between items-center flex-row gap-2 mb-2">
              <div className="flex flex-row gap-2 items-center">
                {/* TODO: 썸네일 로딩에 따른 레이아웃시프트 해결 */}
                <img
                  className="h-17 w-12"
                  src={document?.thumbnail || 'src/assets/images/no-image.png'}
                  alt={document.title}
                />
                <h3 className="text-title3 mr-2 truncate max-w-[400px]">
                  {document.title}
                </h3>
                <span className="text-body2 text-text-secondary truncate max-w-[200px]">
                  {document.authors.join(', ')}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 items-center w-[150px]">
                  <span className="text-title3 mr-8">
                    {document.price.toLocaleString('ko-KR')}원
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Button>구매하기</Button>
                  <Button>상세보기</Button>
                </div>
              </div>
            </div>
            <hr className="border-t border-text-subtitle" />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultList;
