import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HouseSvg } from "../../assets/images/icons/home.svg";
import { ReactComponent as DashboardSvg } from "../../assets/images/icons/dashboard.svg";
import { ReactComponent as DollarSvg } from "../../assets/images/icons/dollar.svg";
import { ReactComponent as AddressBookSvg } from "../../assets/images/icons/address-book.svg";
import styles from "./SidebarMenu.module.scss";

const items = [
  {
    to: "/",
    icon: <DashboardSvg />,
    text: "Overview",
  },
  {
    to: "/explore",
    icon: <HouseSvg />,
    text: "Explore",
  },
  {
    to: "/residents",
    icon: <AddressBookSvg />,
    text: "Clients",
  },
  {
    to: "/bills",
    icon: <DollarSvg />,
    text: "Bills",
  },
];

const SidebarMenu: FC = () => {
  return (
    <nav className={styles.menu}>
      {items.map(({ to, icon, text }) => (
        <div key={text} className={styles.item}>
          {icon}
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
            to={to}
          >
            {text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default SidebarMenu;
