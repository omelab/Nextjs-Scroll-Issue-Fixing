import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { redirect } from 'next/navigation';

import {
  setAccessToken as setAccessTokenInCookie,
  setRefreshToken as setRefreshTokenInCookie,
  removeAccessToken as removeAccessTokenFromCookie,
  removeRefreshToken as removeRefreshTokenFromCookie,
} from '@/auth/cookies';

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      setAccessTokenInCookie(action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      setRefreshTokenInCookie(action.payload);
    },
    logout: (state) => {
      state.accessToken = null;
      removeAccessTokenFromCookie();
      removeRefreshTokenFromCookie();
      redirect('/auth/login');
    },
  },
});

export const { setAccessToken, setRefreshToken, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
