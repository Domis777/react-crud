import React from 'react';
import { MenuItem } from '@mui/material';
import { Link } from './styles';

type NavbarDesktopDropdownLinkProps = {
  to: string,
  children: React.ReactNode
};

const NavbarDesktopDropdownLink: React.FC<NavbarDesktopDropdownLinkProps> = ({
  to,
  children,
}) => (
  <MenuItem sx={{ p: 0 }}>
    <Link to={to}>{children}</Link>
  </MenuItem>
);

export default NavbarDesktopDropdownLink;
