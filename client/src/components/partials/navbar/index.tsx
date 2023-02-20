import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { extendBr } from '../../data/navbar-data';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarMobileMenu from './navbar-mobile-menu/navbar-mobile-menu';
import NavbarToggler from './navbar-toggler';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);
  const togglerDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: { xs: 'flex-end', [extendBr]: 'flex-start' } }}>
        <NavbarDesktopMenu />
        <NavbarToggler isDrawerOpen={isDrawerOpen} togglerDrawer={togglerDrawer} />
        <NavbarMobileMenu isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
