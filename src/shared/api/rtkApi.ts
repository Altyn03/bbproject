import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const allTags = [];

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  // tagTypes: allTags,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
