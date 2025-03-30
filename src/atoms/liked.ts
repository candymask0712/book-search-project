import { atomWithStorage } from 'jotai/utils';
import { Document } from '../types/api.types';

export const likedBooksAtom = atomWithStorage<Document[]>('likedBooks', []);
