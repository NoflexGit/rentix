import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HouseSvg } from "../../assets/images/icons/home.svg";
import { ReactComponent as DashboardSvg } from "../../assets/images/icons/dashboard.svg";
import { ReactComponent as DocumentSvg } from "../../assets/images/icons/document.svg";
import { ReactComponent as SettingsSvg } from "../../assets/images/icons/settings.svg";
import { ReactComponent as MessagesSvg } from "../../assets/images/icons/messages.svg";
import styles from "./SidebarMenu.module.scss";

const items = [
  {
    to: "/dashboard",
    icon: <DashboardSvg />,
    text: "Overview",
  },
  {
    to: "/dashboard/explore",
    icon: <HouseSvg />,
    text: "Explore",
  },
  {
    to: "/dashboard/documents",
    icon: <DocumentSvg />,
    text: "Documents",
  },
  {
    to: "/dashboard/messages",
    icon: <MessagesSvg />,
    text: "Messages",
  },
  {
    to: "/dashboard/settings",
    icon: <SettingsSvg />,
    text: "Settings",
  },
];

const SidebarMenu: FC = () => {
  return (
    <nav className={styles.menu}>
      {items.map(({ to, icon, text }) => (
        <div key={text} className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
            to={to}
          >
            {icon}
            {text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default SidebarMenu;
