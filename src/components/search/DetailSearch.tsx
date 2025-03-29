import { useState, useRef, useEffect } from 'react';
import CloseIcon from '../../assets/icons/close.svg?react';
import DefaultButton from '../shared/button/Button';
import Dropdown from '../shared/dropdown/Dropdown';
import { SearchTarget } from '../../types/api.types';
import SEARCH_TARGETS from '../../constants/search';
const searchTargetOptions = Object.keys(SEARCH_TARGETS);

interface Props {
  onClose: () => void;
  query: string;
  setQuery: (query: string) => void;
  searchTarget: SearchTarget;
  setSearchTarget: (target: SearchTarget) => void;
}

const DetailSearchModal: React.FC<Props> = ({
  onClose,
  setQuery,
  searchTarget,
  setSearchTarget
}) => {
  const [detailedQuery, setDetailedQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(searchTarget);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] p-3 bg-white rounded-md shadow-md border z-50"
    >
      <div className="flex flex-col gap-5">
        <button className="ml-auto" onClick={handleClose}>
          <CloseIcon fill="#B1B8C0" width={16} height={16} />
        </button>

        {/* 검색 옵션 & 입력창 */}
        <div className="flex items-center">
          {/* 드롭다운 버튼 */}
          <Dropdown
            searchTarget={selectedOption}
            setSearchTarget={setSelectedOption}
            // TODO 상수에서 가져오도록 수정
            options={searchTargetOptions as SearchTarget[]}
          />
          {/* 검색어 입력창 */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="검색어 입력"
              value={detailedQuery}
              onChange={e => setDetailedQuery(e.target.value)}
              className="w-full pl-1 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder: text-captionMedium "
            />
          </div>
        </div>
        <DefaultButton
          onClick={() => {
            setQuery(detailedQuery);
            setSearchTarget(selectedOption);
          }}
          className="mb-5"
        >
          검색하기
        </DefaultButton>
      </div>
    </div>
  );
};

export default DetailSearchModal;
