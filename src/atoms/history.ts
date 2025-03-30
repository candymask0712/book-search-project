import { atomWithStorage } from 'jotai/utils';

export const searchHistoryAtom = atomWithStorage<string[]>('searchHistory', []);
