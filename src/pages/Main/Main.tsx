import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '@/components/Sidebar/Sidebar';
import Content from '@/components/Content/Content';
import OverviewPage from '@/pages/Overview/Overview';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/apartments" element={<OverviewPage />} />
          <Route path="/" element={<OverviewPage />} />
          <Route path="/" element={<OverviewPage />} />
          <Route path="/" element={<OverviewPage />} />
        </Routes>
      </Content>
    </>
  );
};

export default MainPage;
