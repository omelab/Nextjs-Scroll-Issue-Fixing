'use client';
import React, { useState } from 'react';
import { useLoginMutation } from '@/redux/api/auth';
import { setAccessToken, setRefreshToken } from '@/redux/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({ username, password }).unwrap();
      if (response.accessToken) {
        dispatch(setAccessToken(response.accessToken));
        dispatch(setRefreshToken(response.refreshToken));
        router.push('/news');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-950 p-10">
      <div>
        <div className="grid grid-flow-row auto-rows-max">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 my-2 rounded min-w-72 text-slate-950"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 my-2 rounded min-w-72 text-slate-950"
          />
          <button
            className="rounded bg-teal-800 text-white  my-2 p-2"
            onClick={handleLogin}
            disabled={isLoading}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
