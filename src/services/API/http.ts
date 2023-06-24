import Axios from 'axios';

import Config from 'react-native-config';
import {BASE_URL} from '../BaseURL';

const instance = Axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config: any) => {
    const token = Config.ACCESS_KEY;

    config.headers.Authorization = `Client-ID ${token}`;
    config.headers['Accept-Version'] = 'v1';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    if (error?.response?.status === 401) {
      // dispatch(setIsLogin(false));
      throw error.response;
    }
    return Promise.reject(error);
  },
);

export const http = instance;
