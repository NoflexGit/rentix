import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignIn";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import OverviewPage from "../pages/Overview";
import PropertiesPage from "../pages/Properties";
import PropertyDetailsPage from "../pages/PropertyDetails";
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
          <Route path="apartments" element={<PropertiesPage />} />
          <Route path="apartments/:id" element={<PropertyDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesList;
