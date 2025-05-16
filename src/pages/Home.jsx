import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/').then(res => setUsers(res.data));
  }, []);

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 border-b pb-2'>Users</h2>
      <ul className='space-y-2'>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`} className='block p-2 border rounded hover:bg-gray-100'>
              {user.name} ({user.username})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
