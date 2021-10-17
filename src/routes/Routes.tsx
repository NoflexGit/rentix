import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main/Main';

const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default RoutesList;
