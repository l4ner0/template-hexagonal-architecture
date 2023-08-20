import axios, { AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiRequest = Record<string, any>;
type ApiOptions = {
  timeout?: number;
};

const HTTP_CONFIGURATION = {
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  defaultTimeout: 10000,
};

const instance = axios.create({
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
  headers: {
    'content-type': 'application/json',
    Authorization: process.env.AUTH_KONG,
  },
});

export const get = async <T>(url: string, options?: ApiOptions): Promise<T> => {
  const response: AxiosResponse<T> = await instance({
    url,
    method: 'GET',
    timeout: options?.timeout || HTTP_CONFIGURATION.defaultTimeout,
  });
  return response.data;
};

export const post = async <T>(url: string, data: ApiRequest, options?: ApiOptions): Promise<T> => {
  const response: AxiosResponse<T> = await instance({
    url,
    method: 'POST',
    timeout: options?.timeout || HTTP_CONFIGURATION.defaultTimeout,
    data,
  });
  return response.data;
};

export const put = async <T>(url: string, data: ApiRequest, options?: ApiOptions): Promise<T> => {
  const response: AxiosResponse<T> = await instance({
    url,
    method: 'PATCH',
    timeout: options?.timeout || HTTP_CONFIGURATION.defaultTimeout,
    data,
  });
  return response.data;
};
