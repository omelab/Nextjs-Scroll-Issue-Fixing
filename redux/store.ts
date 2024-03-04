import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import baseApi from './api/base';
import authReducer from '@/redux/reducers/authSlice';
import scrollReducer from './reducers/scrollSlice';
import { authMiddleware } from '@/middleware/authMiddleware';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  scrl: scrollReducer,
  auth: authReducer,
  // other reducers...
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, authMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;