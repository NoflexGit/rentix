import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import OverviewPage from "../Overview";
import ApartmentsPage from "../Apartments";

const DashboardPage: FC = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Routes>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="apartments" element={<ApartmentsPage />} />
        </Routes>
      </Content>
    </>
  );
};

export default DashboardPage;
