import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HouseSvg } from '@/assets/images/icons/home.svg';
import { ReactComponent as DashboardSvg } from '@/assets/images/icons/dashboard.svg';
import { ReactComponent as DollarSvg } from '@/assets/images/icons/broom.svg';
import { ReactComponent as BroomSvg } from '@/assets/images/icons/dollar.svg';
import { ReactComponent as AddressBookSvg } from '@/assets/images/icons/address-book.svg';
import styles from './SidebarMenu.module.scss';

const SidebarMenu = (): JSX.Element => {
  const items = useMemo(
    () => [
      {
        to: '/overview',
        icon: <DashboardSvg />,
        text: 'Overview',
      },
      {
        to: '/apartments',
        icon: <HouseSvg />,
        text: 'My apartments',
      },
      {
        to: '/residents',
        icon: <AddressBookSvg />,
        text: 'Residents',
      },
      {
        to: '/bills',
        icon: <DollarSvg />,
        text: 'Bills',
      },
      {
        to: '/services',
        icon: <BroomSvg />,
        text: 'Services',
      },
    ],
    [],
  );

  return (
    <nav className={styles.menu}>
      {items.map(({ to, icon, text }) => (
        <div key={text} className={styles.item}>
          {icon}
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
            to={to}>
            {text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default SidebarMenu;
