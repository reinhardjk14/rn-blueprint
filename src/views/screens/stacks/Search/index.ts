import {SearchPhotosType} from '_actions/search';
import SearchPage from './SearchPage';
import SearchDetail from './SearchDetail';
import {ItemPhotoDTO} from 'src/Interfaces/photos';

export const defaultParam: SearchPhotosType = {
  page: 1,
};
export interface CardItemPhotoProps {
  data: ItemPhotoDTO;
}
export {SearchPage, SearchDetail};
