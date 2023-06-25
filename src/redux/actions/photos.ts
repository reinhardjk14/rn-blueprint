import Endpoints from '_services/API/endpoint';
import {http} from '_services/API/http';
import {AnyAction, Dispatch} from 'redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {URLSearchParams} from 'src/utils/helpers';
import {TYPES} from '../actionTypes';
import {ItemTopicDTO} from 'src/Interfaces/topics';

export const likePhoto = (payload: ItemPhotoDTO) => ({
  type: TYPES.PHOTOS.LIKE_PHOTO,
  payload,
});

export const dislikePhoto = (payload: ItemPhotoDTO) => ({
  type: TYPES.PHOTOS.DISLIKE_PHOTO,
  payload,
});

export const clearLiked = () => ({
  type: TYPES.PHOTOS.CLEAR_ALL_LIKED,
});

export type ParamPhotosType = {
  page: number;
  per_page?: number;
  order_by?: 'latest' | 'oldest' | 'popular';
};
export const getListPhotos =
  (params?: ParamPhotosType) =>
  (dispatch: Dispatch<AnyAction>): Promise<ItemPhotoDTO[]> => {
    dispatch({type: TYPES.PHOTOS.GET_LIST_PHOTOS_START});
    let path = Endpoints.photos.listPhotos;
    if (params) {
      const qparam = URLSearchParams(params);
      path += qparam;
    }

    return new Promise((resolve, reject) => {
      http
        .get(path)
        .then((res: any) => {
          dispatch({type: TYPES.PHOTOS.GET_LIST_PHOTOS_SUCCESS});
          resolve(res?.data || []);
        })
        .catch(err => {
          dispatch({type: TYPES.PHOTOS.GET_LIST_PHOTOS_FAILED});
          reject(err);
        });
    });
  };

export type ParamTopicType = {
  ids?: string; // Limit to only matching topic ids or slugs. (Optional; Comma separated string)
  page?: number; // Page number to retrieve. (Optional; default: 1)
  per_page?: number; //	Number of items per page. (Optional; default: 10)
  order_by?: 'featured' | 'latest' | 'oldest' | 'position'; //How to sort the topics. (Optional; Valid values: featured, latest, oldest, position; default: position)
};
export const getListTopics =
  (params?: ParamTopicType) =>
  (dispatch: Dispatch<AnyAction>): Promise<ItemTopicDTO[]> => {
    dispatch({type: TYPES.TOPICS.GET_LIST_TOPIC_START});
    let path = Endpoints.topics.topic;
    if (params) {
      const qparam = URLSearchParams(params);
      path += qparam;
    }

    return new Promise((resolve, reject) => {
      http
        .get(path)
        .then((res: any) => {
          dispatch({type: TYPES.TOPICS.GET_LIST_TOPIC_SUCCESS});
          resolve(res?.data || []);
        })
        .catch(err => {
          dispatch({type: TYPES.TOPICS.GET_LIST_TOPIC_FAILED});
          reject(err);
        });
    });
  };
