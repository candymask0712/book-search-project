import { useState, useRef } from 'react';
import CloseIcon from '../../assets/icons/close.svg?react';
import DefaultButton from '../shared/button/Button';
import Dropdown from '../shared/dropdown/Dropdown';
import { SearchTarget } from '../../types/api.types';
import SEARCH_TARGETS from '../../constants/search';
import { useClickAway } from 'react-use';
const searchTargetOptions = Object.keys(SEARCH_TARGETS);

interface Props {
  onClose: () => void;
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
  const detailedQueryRef = useRef<HTMLInputElement>(null);
  const [selectedOption, setSelectedOption] = useState(searchTarget);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
  };

  useClickAway(modalRef, () => {
    onClose();
  });

  return (
    <div
      ref={modalRef}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] p-3 bg-white rounded-md shadow-md border z-50"
    >
      <div className="flex flex-col gap-5">
        <button className="ml-auto" onClick={handleClose}>
          <CloseIcon fill="#B1B8C0" width={16} height={16} />
        </button>

        <div className="flex items-center">
          <Dropdown
            searchTarget={selectedOption}
            setSearchTarget={setSelectedOption}
            // TODO 상수에서 가져오도록 수정
            options={searchTargetOptions as SearchTarget[]}
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder="검색어 입력"
              ref={detailedQueryRef}
              className="w-full pl-1 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder: text-captionMedium "
            />
          </div>
        </div>
        <DefaultButton
          onClick={() => {
            setQuery(detailedQueryRef.current?.value || '');
            setSearchTarget(selectedOption);
            onClose();
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
