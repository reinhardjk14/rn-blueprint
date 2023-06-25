import {ItemPhotoDTO} from 'src/Interfaces/photos';
import HomeScreen from './HomeScreen';
import {ItemTopicDTO} from 'src/Interfaces/topics';
import {ParamPhotosType} from '_actions/photos';

export interface CardUserPhotoProps {
  data: ItemPhotoDTO;
}
export interface ExplorerListProps {
  data: ItemTopicDTO[];
}

export const defaultParam: ParamPhotosType = {
  page: 1,
};

export {HomeScreen};
