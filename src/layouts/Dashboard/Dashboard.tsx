import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

const Dashboard: FC = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Dashboard;
