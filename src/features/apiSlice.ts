import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const allTags = [];

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  // tagTypes: allTags,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
