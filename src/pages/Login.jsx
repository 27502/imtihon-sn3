import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Qo'shildi
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className='p-4'>
      <input
        type='email'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='border p-2 mr-2'
      />
      <input
        type='password'
        placeholder='Enter password'
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        required
        className='border p-2 mr-2'
      />
      <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'>Login</button>
    </form>
  );
};

export default Login;
