import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navbarDesktopItemStyles } from './styles';

const NavbarDesktopLinks = styled(NavLink)(({ theme }) => ({
  ...navbarDesktopItemStyles(theme),
}));

export default NavbarDesktopLinks;
