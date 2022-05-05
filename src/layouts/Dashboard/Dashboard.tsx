import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

const DashboardPage: FC = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default DashboardPage;
