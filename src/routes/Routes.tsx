import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/Main/Main';
import SignInPage from '@/pages/SighIn/SignIn';

const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
};

export default RoutesList;
