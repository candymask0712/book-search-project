import { useState, useRef } from 'react';
import { SearchTarget } from '../../../types/api.types';
import { searchTargetKR } from '../../../constants/search';
import ArrowDownIcon from '../../../assets/icons/caret-down.svg?react';
import { useClickAway } from 'react-use';

interface Props {
  searchTarget: SearchTarget;
  setSearchTarget: (target: SearchTarget) => void;
  options: SearchTarget[];
}

const Dropdown = ({ searchTarget, setSearchTarget, options }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <div className="relative mr-4 w-24" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full text-body2Bold px-2 py-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {searchTargetKR[searchTarget]}
        <ArrowDownIcon />
      </button>
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 mt-2 w-24 bg-white border rounded-md shadow-lg">
          {options.map(
            option =>
              option !== searchTarget && (
                <li
                  key={option}
                  className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer text-text-subtitle"
                  onClick={() => {
                    setSearchTarget(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {searchTargetKR[option]}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
