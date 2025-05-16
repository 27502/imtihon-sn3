import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import Header from './components/Header';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { email, logout } = useAuth();

  return (
    <BrowserRouter>
      <Header email={email} onLogout={logout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
