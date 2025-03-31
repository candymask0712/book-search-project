import { useState } from 'react';
import { Document } from '../../../types/api.types';
import Button from '../button/Button';
import CaretUpIcon from '../../../assets/icons/caret-up.svg?react';
import CaretDownIcon from '../../../assets/icons/caret-down.svg?react';
import BookThumbnail from '../thumbnail/BookThumbnail';
import cn from 'classnames';
import ToggleIconButton from '../button/ToggleIconButton';
import openExternalURL from '../../../utils/openExternalURL';

interface Props {
  data: Document[];
}

const ResultList = ({ data }: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      {data?.map((document, index) => {
        const isExpanded = expandedIndex === index;
        const { title, authors, contents, price, sale_price, url } = document;
        const isSale = sale_price !== -1;
        const salePrice = isSale ? sale_price : price;

        return (
          <div key={document.url} className="w-full mb-4">
            {isExpanded ? (
              // 상세보기 컴포넌트
              <div className="flex flex-row justify-between mt-7 rounded-md mb-10">
                <div className="flex flex-row gap-10 ml-10">
                  <div className="w-[210px]">
                    <BookThumbnail document={document} size="6" />
                  </div>
                  <div className="w-[360px] mt-10">
                    <TitleAndAuthor
                      texts={[title, authors]}
                      widths={['max-w-[200px]', 'min-w-[50px]']}
                    />
                    <h4 className="text-body2Bold mt-6 mb-6">책 소개</h4>
                    <p className="text-small text-text-primary mb-4 leading-[16px]">
                      {contents || '책 소개 정보가 없습니다.'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-[300px]">
                  <div className="flex justify-end mb-2">
                    <ToggleIconButton
                      onClick={() => handleToggle(index)}
                      icon={<CaretUpIcon />}
                      className="w-[115px]"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col gap-3 mb-8">
                      <PriceInfo price={price} salePrice={salePrice} />
                    </div>
                    <Button
                      size="large"
                      className="w-[240px]"
                      onClick={() => openExternalURL(url)}
                    >
                      구매하기
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // 축소보기 컴포넌트
              <div className="flex justify-between items-center flex-row gap-2 mb-2 mt-4">
                <div className="flex flex-row gap-2 items-center pl-14">
                  <div className="h-17 w-12 mr-10">
                    <BookThumbnail document={document} size="4" />
                  </div>
                  <TitleAndAuthor
                    texts={[title, authors]}
                    widths={['min-w-[40px]', 'min-w-[50px]']}
                  />
                </div>

                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-2 items-center w-[120px] justify-end mr-10">
                    {price > 0 && (
                      <span className="text-title3">
                        {sale_price !== -1
                          ? sale_price.toLocaleString('ko-KR')
                          : price.toLocaleString('ko-KR')}
                        원
                      </span>
                    )}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-end w-[240px]">
                    <Button
                      size="large"
                      onClick={() => openExternalURL(url)}
                      className="w-[115px]"
                    >
                      구매하기
                    </Button>
                    <ToggleIconButton
                      onClick={() => handleToggle(index)}
                      icon={<CaretDownIcon />}
                      className="w-[115px]"
                    />
                  </div>
                </div>
              </div>
            )}
            <hr className="border-t border-text-subtitle" />
          </div>
        );
      })}
    </div>
  );
};

const TitleAndAuthor = ({
  texts,
  widths
}: {
  texts: [string, string[]];
  widths?: [string?, string?];
}) => {
  const [title, authors] = texts;
  const [titleWidth, authorWidth] = widths || [];

  return (
    <div className="flex flex-row gap-2 items-center max-w-[350px]">
      <h3 className={`text-title3 mr-2 truncate ${titleWidth}`}>{title}</h3>
      <span
        className={`text-body2 text-text-secondary truncate ${authorWidth}`}
      >
        {authors.join(', ')}
      </span>
    </div>
  );
};

const PriceInfo = ({
  price,
  salePrice
}: {
  price: number;
  salePrice: number;
}) => {
  return (
    <>
      {price > 0 && (
        <div className="flex flex-row gap-2 justify-end items-center">
          <span className="text-tinyMedium text-text-secondary">원가:</span>
          <span className={cn({ 'line-through': salePrice !== -1 })}>
            {price.toLocaleString('ko-KR')}원
          </span>
        </div>
      )}
      {salePrice !== -1 && (
        <div className="flex flex-row gap-2 items-center">
          <span className="text-tinyMedium text-text-secondary">할인가:</span>
          <span className="text-title3">
            {salePrice.toLocaleString('ko-KR')}원
          </span>
        </div>
      )}
    </>
  );
};

export default ResultList;
