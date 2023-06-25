import {ItemPhotoDTO} from './photos';

export type SearchResponseDTO = {
  total: number;
  total_pages: number;
  results: ItemPhotoDTO[];
};
