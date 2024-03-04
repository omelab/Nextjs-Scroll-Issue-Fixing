import baseApi from './base';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUser) => ({
        url: '/public/admni/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/admin-signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
