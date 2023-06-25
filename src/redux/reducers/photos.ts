import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {TYPES} from '../actionTypes';

interface InitialPhotoState {
  myLikedPhotos: ItemPhotoDTO[];
}
const initialState: InitialPhotoState = {
  myLikedPhotos: [],
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case TYPES.PHOTOS.LIKE_PHOTO:
      return {...state, myLikedPhotos: [...state.myLikedPhotos, payload]};
    case TYPES.PHOTOS.DISLIKE_PHOTO:
      let liked = [...state.myLikedPhotos];
      console.log('liked', liked);

      const index = liked.findIndex(item => item.id === payload?.id);
      if (index !== -1) {
        liked.splice(index, 1);
        console.log('Item deleted successfully.');
      } else {
        console.log('Item not found.');
      }
      return {
        ...state,
        myLikedPhotos: liked,
      };
    case TYPES.PHOTOS.CLEAR_ALL_LIKED:
      return {...state, myLikedPhotos: []};
    default:
      return state;
  }
};
