import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductById: builder.query({
      query: (id: string) => `/products/${id}`,
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/local',
        method: 'POST',
        body: data,
      }),
    }),

    getUser: builder.query({
      query: () => '/users/me?populate=cart',
    }),
    updateCart: builder.mutation({
      query: (data) => ({
        url: '/users/me',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useUpdateCartMutation,
} = api;
