import { Middleware } from '@reduxjs/toolkit';
import { logout } from '@/redux/reducers/authSlice';
import { redirect } from 'next/navigation';
// import { getAccessToken } from '@/auth/cookies';

export const authMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action: any) => {
    // const accessToken = getAccessToken();

    // const allowedPaths = ['/auth/login', '/auth/register']; // Define paths that don't require authentication

    // if (!accessToken && !allowedPaths.includes(window.location.pathname)) {
    //   redirect('/auth/login');
    //   return;
    // }

    // if (action.type.startsWith('api/') && !accessToken) {
    //   // Redirect to login page if access token is not present
    //   redirect('/auth/login');
    //   return;
    // }

    if (action.type === '/auth/logout') {
      // Dispatch the logout action using next
      next(logout());
      // Redirect to login page
      redirect('/auth/login');
      return;
    }

    return next(action);
  };
