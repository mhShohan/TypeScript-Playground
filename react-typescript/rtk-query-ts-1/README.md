# how to use RTK query in typescript project

## Step - 1: Configure the store

```ts
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
```

## Step - 2: Wrap the parent component with Provide component and pass store as props

```ts
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <h1>RTK Query</h1>
    </Provider>
  );
};

export default App;
```

# Step - 3: Create typed hooks to use in inside components to share states

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Step - 4: Create query api as a custom hook

```ts
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
```

## Step - 4: update the store file in every api create ==> Add to reducer and middleware

```ts
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { postApi } from './features/postApi';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
```

## Step - 5 : Use all hooks in components

```ts
import {
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from '../store/features/postApi';

const Posts = () => {
  /// data fetching hook
  const { isLoading, data, refetch } = useGetPostQuery();

  // create new data hook
  const [createPost] = useCreatePostMutation();

  const createNewPost = async () => {
    const newPost = {
      title: 'new title' + Date.now(),
      body: 'body' + Date.now(),
    };

    await createPost(newPost);
    refetch();
  };

  // delete post hook
  const [deletePost] = useDeletePostMutation();
  const deletePostHandler = async (id: number) => {
    await deletePost(id);
    refetch();
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <ul className='list'>
        {data?.map((item) => (
          <li key={item.id}>
            <span>
              {item.id}-{item.title}
            </span>
            <button onClick={() => deletePostHandler(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={createNewPost}>Add Post</button>
      </div>
    </div>
  );
};

export default Posts;
```
