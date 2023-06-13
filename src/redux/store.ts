import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/api';

const { NODE_ENV } = import.meta.env;

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: NODE_ENV !== 'production',
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
