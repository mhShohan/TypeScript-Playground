import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { postApi } from './services/postApi';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
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
