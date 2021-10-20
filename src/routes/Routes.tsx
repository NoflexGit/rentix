import React, { PropsWithChildren } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from '@/pages/SignIn/SignIn';
import DashboardPage from '@/pages/Dashboard/Dashboard';

const auth = true;
const PrivateRoute = ({ children }: PropsWithChildren<any>) =>
  auth ? children : <Navigate to="/auth" />;

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
