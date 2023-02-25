import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { extendBr } from '../data/navbar-data';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarToggler from './navbar-toggler';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);
  const togglerDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar
          sx={{
            justifyContent: { xs: 'flex-end', [extendBr]: 'flex-start' },
            p: { xs: 0, sm: 0 },
          }}
        >
          <NavbarDesktopMenu />
          <NavbarToggler isDrawerOpen={isDrawerOpen} togglerDrawer={togglerDrawer} />
          <NavbarMobileMenu isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
