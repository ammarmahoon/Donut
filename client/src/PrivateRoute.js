import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const login = localStorage.getItem('login');

  return login === 'success' ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
