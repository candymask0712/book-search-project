import { atomWithStorage } from 'jotai/utils';
import { SearchTarget } from '../types/api.types';

export interface SearchHistoryItem {
  query: string;
  searchTarget: SearchTarget;
}

export const searchHistoryAtom = atomWithStorage<SearchHistoryItem[]>(
  'searchHistory',
  []
);
