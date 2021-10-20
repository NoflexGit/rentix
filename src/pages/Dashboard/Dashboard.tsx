import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar/Sidebar';
import Content from '@/components/Content/Content';
import OverviewPage from '@/pages/Overview/Overview';
import ApartmentsPage from '@/pages/Apartments/Apartments';

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('overview');
    }
  }, [navigate, location]);

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

export default MainPage;
