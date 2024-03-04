import baseApi from './base';

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (query) => `/news/all${query ? `?${query}` : ''}`,
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: '/news',
        method: 'POST',
        body: newBlog,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/news/${id}`,
        method: 'PUT',
        body: updatedBlog,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
