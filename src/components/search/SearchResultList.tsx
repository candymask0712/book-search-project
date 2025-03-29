import { useState } from 'react';
import { Document } from '../../types/api.types';
import Button from '../shared/button/Button';
import IconButton from '../shared/button/IconButton';
import CaretUpIcon from '../../assets/icons/caret-up.svg?react';
import CaretDownIcon from '../../assets/icons/caret-down.svg?react';

interface Props {
  data: Document[];
}

const DEFAULT_THUMBNAIL_SRC = 'src/assets/images/no-image.png';

const SearchResultList = ({ data }: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-[960px]">
      {data?.map((document, index) => {
        const isExpanded = expandedIndex === index;

        // TODO: 컴포넌트 세분화 하기
        return (
          <div key={document.isbn} className="w-full mb-4">
            {isExpanded ? (
              <div className="flex flex-row justify-between mt-7 rounded-md">
                <div className="flex flex-row gap-10">
                  <img
                    className="w-[210px]"
                    src={document?.thumbnail || DEFAULT_THUMBNAIL_SRC}
                    alt={document.title}
                  />
                  <div className="w-[360px]">
                    <TitleAndAuthor
                      texts={[document.title, document.authors]}
                      widths={['max-w-[200px]', 'max-w-[100px]']}
                    />
                    <h4 className="text-title2 mt-6 mb-6">책 소개</h4>
                    <p className="text-body2 text-text-secondary mb-4">
                      {document.contents
                        ? document.contents.replace(/\s+/g, '\n\n')
                        : '책 소개 정보가 없습니다.'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between h-[280px]">
                  <div className="flex justify-end mb-2">
                    <IconButton
                      text="상세보기"
                      variant="secondary"
                      icon={<CaretUpIcon />}
                      size="large"
                      iconPosition="right"
                      onClick={() => handleToggle(index)}
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col gap-3 mb-8">
                      <div className="flex flex-row gap-2 justify-end items-center">
                        <span className="text-tinyMedium text-text-secondary">
                          원가:
                        </span>
                        <span className="line-through">
                          {document.price.toLocaleString('ko-KR')}원
                        </span>
                      </div>
                      {document.sale_price !== -1 && (
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-tinyMedium text-text-secondary">
                            할인가:
                          </span>
                          <span className="text-title3">
                            {document.sale_price.toLocaleString('ko-KR')}원
                          </span>
                        </div>
                      )}
                    </div>
                    <Button
                      size="large"
                      className="w-[240px]"
                      onClick={() =>
                        window.open(
                          document.url,
                          '_blank',
                          'noopener,noreferrer'
                        )
                      }
                    >
                      구매하기
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center flex-row gap-2 mb-2">
                  <div className="flex flex-row gap-2 items-center">
                    {/* TODO: 썸네일 로딩에 따른 레이아웃시프트 해결 */}
                    <img
                      className="h-17 w-12"
                      src={document?.thumbnail || DEFAULT_THUMBNAIL_SRC}
                      alt={document.title}
                    />
                    <TitleAndAuthor
                      texts={[document.title, document.authors]}
                      widths={['max-w-[300px]', 'max-w-[150px]']}
                    />
                  </div>

                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row gap-2 items-center w-[150px] justify-end mr-10">
                      <span className="text-title3">
                        {document.sale_price !== -1
                          ? document.sale_price.toLocaleString('ko-KR')
                          : document.price.toLocaleString('ko-KR')}
                        원
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Button size="large">구매하기</Button>
                      <IconButton
                        text="상세보기"
                        variant="secondary"
                        size="large"
                        icon={<CaretDownIcon />}
                        iconPosition="right"
                        onClick={() => handleToggle(index)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-t border-text-subtitle" />
              </>
            )}
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
    <div className="flex flex-row gap-2 items-center">
      <h3 className={`text-title3 mr-2 truncate ${titleWidth}`}>{title}</h3>
      <span
        className={`text-body2 text-text-secondary truncate ${authorWidth}`}
      >
        {authors.join(', ')}
      </span>
    </div>
  );
};

export default SearchResultList;
