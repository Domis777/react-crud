import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const NavbarLayout = () => (
  <Box sx={{
    dysplay: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }}
  >
    <Navbar />
    <Toolbar />
    <Box sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  </Box>
);

export default NavbarLayout;
