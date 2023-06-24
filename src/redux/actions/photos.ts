import Endpoints from '_services/API/endpoint';
import {http} from '_services/API/http';
import {Dispatch} from 'react';
import {AnyAction} from 'redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import {URLSearchParams} from 'src/utils/helpers';
import {TYPES} from '../actionTypes';

export type ParamPhotosType = {
  page?: number;
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
          console.log('response get list', res);
          dispatch({type: TYPES.PHOTOS.GET_LIST_PHOTOS_SUCCESS});
          resolve(res?.data || []);
        })
        .catch(err => {
          console.log('err', err);
          dispatch({type: TYPES.PHOTOS.GET_LIST_PHOTOS_FAILED});
          reject(err);
        });
    });
  };
