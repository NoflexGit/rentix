import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageTitle.module.scss';

const locations = [
  {
    pathname: '/overview',
    title: 'Overview',
  },
  {
    pathname: '/apartments',
    title: 'My apartments',
  },
  {
    pathname: '/residents',
    title: 'Residents',
  },
  {
    pathname: '/services',
    title: 'Services',
  },
  {
    pathname: '/bills',
    title: 'Bills',
  },
];

const PageTitle = (): JSX.Element => {
  const location = useLocation();
  const [title, setTitle] = useState('initState');

  useEffect(() => {
    locations.forEach(({ title, pathname }) => {
      if (location.pathname.includes(pathname)) {
        setTitle(title);
      }
    });
  }, [location]);

  return <div className={styles.pageTitle}>{title}</div>;
};

export default PageTitle;
