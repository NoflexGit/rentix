import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";

interface IProps {
  children: React.ReactElement;
}

const PrivateRoute: FC<IProps> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isAuthenticated) return children;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
