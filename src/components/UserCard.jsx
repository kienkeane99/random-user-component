import React, { useEffect, useState } from 'react';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUser(data.results[0]));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center', fontFamily: 'Arial' }}>
      <img src={user.picture.medium} alt="avatar" style={{ borderRadius: '50%' }} />
      <h3 style={{ margin: '10px 0 5px' }}>{`${user.name.first} ${user.name.last}`}</h3>
      <p style={{ color: '#666' }}>{user.location.city}</p>
    </div>
  );
};

export default UserCard;