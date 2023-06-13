import { api } from './api';

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserId: build.query({
      query: (id) => `users/getUser/${id}`,
    }),
  }),
});

export const { useGetUserIdQuery } = usersApi;
