import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export interface IPost {
  id: number;
  title: string;
  body: string;
}

const fetchPost = async () => {
  return await axios.get(baseUrl);
};

const createPostData = async (payload: { title: string; body: string }) => {
  return await axios.post(baseUrl, payload);
};

const deletePostData = async (id: number) => {
  return await axios.delete(baseUrl + id);
};

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchPost,
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({
      query: () => '/',
      //   transformResponse: (res: IPost[]) => res.slice(0, 10), // transform the Response as your need
      providesTags: ['Post'], // which tagsType use for
    }),
    createPost: builder.mutation({
      query: createPostData,
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: deletePostData,
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostQuery, useCreatePostMutation, useDeletePostMutation } =
  postApi;
