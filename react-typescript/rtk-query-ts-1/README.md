# how to use RTK query in typescript project

## Step - 1: Configure the store

```ts
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
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
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Step - 4: Create query api

```ts
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: string;
  name: string;
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: (queryEndpoint) => `queryEndpoint`,
    }),
  }),
});

export const { useGetAllUsersQuery } = pokemonApi;
```
