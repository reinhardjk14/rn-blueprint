import {ItemPhotoDTO} from 'src/Interfaces/photos';
import HomeScreen from './HomeScreen';
import {ItemTopicDTO} from 'src/Interfaces/topics';

export interface CardUserPhotoProps {
  data: ItemPhotoDTO;
}
export interface ExplorerListProps {
  data: ItemTopicDTO[];
}

export {HomeScreen};
