// src/pages/AuthApp.js

import React from 'react';
import { AuthProvider } from './contexts/AuthProvider';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import { useAuth } from './contexts/AuthProvider';

const AuthContent = () => {
  const { user } = useAuth();

  return user ? <UserInfo /> : <LoginForm />;
};

export default function AuthApp() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Auth Context Example</h1>
          <AuthContent />
        </div>
      </div>
    </AuthProvider>
  );
}
