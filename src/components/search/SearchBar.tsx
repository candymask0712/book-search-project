import React, { useRef, useState } from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import CloseIcon from '../../assets/icons/close.svg?react';
import { useClickAway } from 'react-use';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../../atoms/history';

interface SearchBarProps {
  placeholder?: string;
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setQuery,
  placeholder = '검색어를 입력하세요'
}) => {
  const [history, setHistory] = useAtom(searchHistoryAtom);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef(null);

  const removeHistoryItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
  };

  useClickAway(searchBarRef, () => {
    setIsRecentOpen(false);
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputRef.current) {
      e.preventDefault();
      const inputValue = inputRef.current.value;
      setQuery(inputValue);
      const filteredHistory = history.filter(item => item !== inputValue);
      const newHistory = [inputValue, ...filteredHistory.slice(0, 7)];
      setHistory(newHistory);
      setIsRecentOpen(false);
    }
  };

  const handleSearchChange = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  const handleRemoveHistoryItem = (index: number) => {
    removeHistoryItem(index);
  };

  return (
    <div
      ref={searchBarRef}
      className={`relative w-full bg-gray-100 z-20 ${
        isRecentOpen && history.length > 0 ? 'rounded-t-3xl' : 'rounded-3xl'
      }`}
    >
      <form className="flex items-center px-4 py-2 rounded-t-3xl">
        <SearchIcon className="text-gray-500 mr-2" />
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsRecentOpen(true)}
        />
      </form>
      {isRecentOpen && history.length > 0 && (
        <ul
          className={`absolute top-full left-0 right-0 bg-gray-100 rounded-b-3xl`}
        >
          {history.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center justify-between px-4 py-2 hover:bg-gray-200 pl-10 pr-6 ${
                idx === history.length - 1 ? 'rounded-b-3xl' : ''
              }`}
              onClick={() => {
                handleSearchChange(item);
                setQuery(item);
                setIsRecentOpen(false);
              }}
            >
              <span className="text-gray-700 ">{item}</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleRemoveHistoryItem(idx);
                }}
              >
                <CloseIcon className="text-gray-500 hover:text-gray-700" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
