import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "../pages/SignIn/SignIn";
import DashboardPage from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import useAppSelector from "../hooks/useAppSelector";
import { RootState } from "../store";

const RoutesList: FC = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Routes>
      <Route
        path="auth"
        element={isAuthenticated ? <Navigate to="/overview" /> : <SignInPage />}
      />
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
