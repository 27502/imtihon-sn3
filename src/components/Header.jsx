import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ email, onLogout }) => (
  <header className='bg-blue-600 text-white p-4 flex justify-between'>
    <h1 className='text-xl font-bold'><Link to="/">User Info App</Link></h1>
    <div>
      {email && <span className='mr-4'>{email}</span>}
      {email && <button onClick={onLogout} className='bg-red-500 px-3 py-1 rounded'>Logout</button>}
      {!email && <Link to="/login" className='bg-green-500 px-3 py-1 rounded'>Login</Link>}
    </div>
  </header>
);

export default Header;
