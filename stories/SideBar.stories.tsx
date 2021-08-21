import { Meta } from '@storybook/react';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { SideBar, SideBarItem } from '../src';

const meta: Meta = {
  title: 'SideBar',
};

export default meta;

const NAV_ITEMS = [
  {
    to: `/auth/user-management`,
    title: 'User Management',
    icon: FaUsers,
  },
];

export const Default = () => {
  return (
    <SideBar navItems={NAV_ITEMS}>
      <SideBarItem title="Test" />
    </SideBar>
  );
};
