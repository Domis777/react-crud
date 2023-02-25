import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { extendBr } from '../data/navbar-data';

type NavbarTogglerProps = {
  isDrawerOpen: boolean,
  togglerDrawer: VoidFunction
};

const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  isDrawerOpen,
  togglerDrawer,
}) => {
  const Icon = isDrawerOpen ? CloseIcon : MenuIcon;

  return (
    <IconButton
      sx={{ display: { xs: 'inline-grid', [extendBr]: 'none', margin: '-14px' } }}
      onClick={togglerDrawer}
      edge="end"
    >
      <Icon sx={{ color: 'common.white', fontSize: 32 }} />
    </IconButton>
  );
};

export default NavbarToggler;
