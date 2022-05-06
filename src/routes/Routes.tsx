import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignIn";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import OverviewPage from "../pages/Overview";
import PropertiesPage from "../pages/Explore";
import PropertyDetailsPage from "../pages/Details";
import App from "../App";

const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<SignInPage />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<OverviewPage />} />
          <Route path="explore" element={<PropertiesPage />} />
          <Route path="explore/:id" element={<PropertyDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesList;
