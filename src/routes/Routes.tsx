import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/Main/Main';
import SignInPage from '@/pages/SignIn/SignIn';

const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="overview" element={<MainPage />} />
      <Route path="signin" element={<SignInPage />} />
    </Routes>
  );
};

export default RoutesList;
