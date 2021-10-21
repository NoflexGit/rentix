import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from '@/pages/SignIn/SignIn';
import DashboardPage from '@/pages/Dashboard/Dashboard';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="auth" element={<SignInPage />} />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesList;
