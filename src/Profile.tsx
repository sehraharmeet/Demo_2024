import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
  const { username, EmpCode } = useParams<{ username: string; EmpCode: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const age = queryParams.get('age');
  const city = queryParams.get('city');

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Username: {username}</p>
      <p>ID: {EmpCode}</p> 
      {age}-{city}
    </div>
  );
};

export default Profile;