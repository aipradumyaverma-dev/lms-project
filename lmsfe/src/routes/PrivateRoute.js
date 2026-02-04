import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  // Commented out login validation - direct access to dashboard
  // let userValidation = localStorage.getItem('loginToken') == null ? false : true;
  // return <>{userValidation ? <Outlet /> : <Navigate to="/login" />};</>;

  // Direct access without login
  return <Outlet />;
}
