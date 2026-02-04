import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  // Login validation - users must be logged in to access protected routes
  let userValidation = localStorage.getItem('loginToken') == null ? false : true;
  return <>{userValidation ? <Outlet /> : <Navigate to="/login" />}</>;
}
