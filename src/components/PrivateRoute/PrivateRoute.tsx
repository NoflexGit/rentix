import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import useAppSelector from '@/hooks/useAppSelector';

const PrivateRoute = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
