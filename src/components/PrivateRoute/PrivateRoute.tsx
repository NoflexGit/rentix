import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";

interface IProps {
  children?: React.ReactNode;
}

const PrivateRoute: FC<IProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" />;
};

export default PrivateRoute;
