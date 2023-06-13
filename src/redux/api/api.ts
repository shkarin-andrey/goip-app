import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { createApi } from '@reduxjs/toolkit/query/react';

import { useWebTelegramApp } from '../../hooks/useWebTelegramApp';

const { VITE_APP_BASE_URL } = import.meta.env;

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_APP_BASE_URL,
  prepareHeaders: (headers) => {
    const { onDataUnsafe } = useWebTelegramApp();

    const user_id = onDataUnsafe().user?.id || 940222589;
    const token = btoa(`${user_id}:password`);
    headers.set('Authorization', `Basic ${token}`);

    return headers;
  },
});

const staticApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});

export const api = staticApi.enhanceEndpoints({});
