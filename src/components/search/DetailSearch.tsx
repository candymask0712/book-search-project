import { useState, useRef } from 'react';
import CloseIcon from '../../assets/icons/close.svg?react';
import DefaultButton from '../shared/button/Button';
import Dropdown from '../shared/dropdown/Dropdown';
import { SearchTarget } from '../../types/api.types';
import { useClickAway } from 'react-use';
import { searchTargetKeys } from '../../constants/search';

interface Props {
  onClose: () => void;
  searchState: {
    query: string;
    searchTarget: SearchTarget;
  };
  setSearchState: (searchState: {
    query: string;
    searchTarget: SearchTarget;
  }) => void;
}

const DetailSearchModal: React.FC<Props> = ({
  onClose,
  searchState,
  setSearchState
}) => {
  const detailedQueryRef = useRef<HTMLInputElement>(null);
  const [selectedOption, setSelectedOption] = useState(
    searchState.searchTarget
  );
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
            options={searchTargetKeys}
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
            setSearchState({
              query: detailedQueryRef.current?.value || '',
              searchTarget: selectedOption
            });
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
