import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import scrollReducer from './reducers/scrollSlice';

const rootReducer = combineReducers({
  scrl: scrollReducer,
  // other reducers...
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
