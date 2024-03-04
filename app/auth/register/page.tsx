'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '@/redux/api/auth';
import { setAccessToken } from '@/redux/reducers/authSlice';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      const response = await registerUser({ username, password }).unwrap();
      dispatch(setAccessToken(response.accessToken));
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
