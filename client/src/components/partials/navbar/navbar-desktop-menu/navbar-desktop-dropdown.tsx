import React from 'react';
import {
  Box,
  Popper,
  Paper,
  MenuList,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { LinksGroup } from '../../../data/navbar-data';
import { navbarDesktopItemStyles } from './styles';
import NavbarDesktopDropdownLink from './navbar-desktop-dropdown-link';

type NavbarDesktopDropdownProps = LinksGroup & {
  open: boolean,
  onClick: VoidFunction,
};

const NavbarDesktopDropdown: React.FC<NavbarDesktopDropdownProps> = ({
  title,
  links,
  open,
  onClick,
}) => {
  const { pathname } = useLocation();
  const isActive = links.some(({ to }) => to === pathname);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const Icon = open ? KeyboardDoubleArrowUpIcon : KeyboardDoubleArrowDownIcon;

  return (
    <Box
      className={isActive ? 'active' : undefined}
      sx={[navbarDesktopItemStyles, { userSelect: 'none', p: 2 }]}
      onClick={onClick}
      ref={ref}
    >
      {title}
      <Icon />
      <Popper
        open={open}
        anchorEl={ref.current}
        placement="bottom-end"
      >
        <Paper sx={{ width: 200 }} elevation={4}>
          <MenuList>
            {links.map(({ text, to }) => (
              <NavbarDesktopDropdownLink key={to} to={to}>
                {text}
              </NavbarDesktopDropdownLink>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarDesktopDropdown;
