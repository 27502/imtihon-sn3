import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api/api';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p className='p-4'>Loading...</p>;

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold'>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
  );
};

export default UserDetails;
