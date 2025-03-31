// /src/utils/searchHistory.ts
import { Dispatch } from 'react';
import { SearchTarget } from '../types/api.types';
import { SetStateAction } from 'jotai';

export interface SearchHistoryItem {
  query: string;
  searchTarget: SearchTarget;
}

export const updateSearchHistory = (
  history: SearchHistoryItem[],
  setHistory: Dispatch<SetStateAction<SearchHistoryItem[]>>,
  newItem: SearchHistoryItem,
  limit: number = 8
) => {
  const filteredHistory = history.filter(item => item.query !== newItem.query);
  setHistory([newItem, ...filteredHistory.slice(0, limit - 1)]);
};
