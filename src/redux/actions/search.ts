import Endpoints from '_services/API/endpoint';
import {http} from '_services/API/http';
import {AnyAction, Dispatch} from 'redux';
import {SearchResponseDTO} from 'src/Interfaces/search';
import {URLSearchParams} from 'src/utils/helpers';
import {TYPES} from '../actionTypes';

export type SearchPhotosType = {
  query?: string;
  page: number;
  per_page?: number;
  order_by?: 'latest' | 'relevant';
};
export const searchPhotos =
  (params?: SearchPhotosType) =>
  (dispatch: Dispatch<AnyAction>): Promise<SearchResponseDTO> => {
    dispatch({type: TYPES.SEARCH.SEARCH_PHOTOS_START});
    let path = Endpoints.search.photos;
    if (params) {
      const qparam = URLSearchParams(params);
      path += qparam;
    }

    return new Promise((resolve, reject) => {
      http
        .get(path)
        .then((res: any) => {
          dispatch({type: TYPES.SEARCH.SEARCH_PHOTOS_SUCCESS});
          resolve(res?.data || {});
        })
        .catch(err => {
          dispatch({type: TYPES.SEARCH.SEARCH_PHOTOS_FAILED});
          reject(err);
        });
    });
  };
