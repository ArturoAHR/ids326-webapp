import { AxiosRequestConfig } from 'axios';

export const AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
