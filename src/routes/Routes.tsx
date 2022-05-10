import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import SignInPage from "../pages/SignIn";
import OverviewPage from "../pages/Overview";
import DocumentsPage from "../pages/Documents";
import MessagesPage from "../pages/Messages";
import PropertiesPage from "../pages/Explore";
import PropertyDetailsPage from "../pages/Details";
import App from "../App";

const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<SignInPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<OverviewPage />} />
          <Route path="explore" element={<PropertiesPage />} />
          <Route path="explore/:id" element={<PropertyDetailsPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesList;
