import React from 'react';
import { Box, ClickAwayListener, Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { extendBr, mainLinks, linksGroups } from '../../../data/navbar-data';
import NavbarDesktopDropdown from './navbar-desktop-dropdown';
import NavbarDesktopLinks from './navbar-desktop-link';

const NavbarDesktopMenu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = React.useState<string | false>(false);
  const toggleMenu = (title: string) => setActiveMenuTitle(
    activeMenuTitle === title
      ? false
      : title,
  );
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(extendBr));

  return (
    <Box sx={{
      display: { xs: 'none', [extendBr]: 'flex' },
      alignSelf: 'stretch',
    }}
    >
      {mainLinks.map(({ to, text }) => (
        <NavbarDesktopLinks sx={{ textDecoration: 'none' }} key={to} to={to}>
          {text}
        </NavbarDesktopLinks>
      ))}
      <ClickAwayListener onClickAway={() => setActiveMenuTitle(false)}>
        <Box sx={{ display: 'flex' }}>
          {linksGroups.map((linkGroup) => (
            <NavbarDesktopDropdown
              key={linkGroup.title}
              {...linkGroup}
              open={activeMenuTitle === linkGroup.title && isDesktop}
              onClick={() => toggleMenu(linkGroup.title)}
            />
          ))}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default NavbarDesktopMenu;
