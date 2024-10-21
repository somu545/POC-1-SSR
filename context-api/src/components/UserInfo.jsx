

import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

const UserInfo = () => {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-4">
      <p className="text-lg">Welcome, {user.username}!</p>
      <button onClick={logout} className="w-full p-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
