import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageTitle.module.scss";

const locations = [
  {
    pathname: "/overview",
    title: "Overview",
  },
  {
    pathname: "/apartments",
    title: "My Properties",
  },
  {
    pathname: "/residents",
    title: "Clients",
  },
  {
    pathname: "/services",
    title: "Services",
  },
  {
    pathname: "/bills",
    title: "Bills",
  },
];

const PageTitle: FC = () => {
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    locations.forEach(({ title, pathname }) => {
      if (location.pathname.includes(pathname)) {
        setCurrentTitle(title);
      }
    });
  }, [location]);

  return <div className={styles.pageTitle}>{currentTitle}</div>;
};

export default PageTitle;
