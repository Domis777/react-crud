import React from 'react';
import {
  Toolbar,
  Drawer,
  MenuList,
  type AccordionProps,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { extendBr, linksGroups, mainLinks } from '../../data/navbar-data';
import NavbarMobileLink from './navbar-mobile-link';
import NavbarMobileMenuAccordion from './navbar-mobile-menu-accordion';
import { getActiveLinksGroupTitle } from '../helper';

type NavbarMobileMenuProps = {
  isDrawerOpen: boolean,
  closeDrawer: VoidFunction,
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  isDrawerOpen,
  closeDrawer,
}) => {
  const { pathname } = useLocation();
  const activeLinksGroupTitle = getActiveLinksGroupTitle(pathname);
  const [openAccordion, setOpenAccordion] = React.useState(activeLinksGroupTitle);

  const createAccordionChangeHandler = (
    title: string,
  ): AccordionProps['onChange'] => (
    _,
    shouldOpen,
  ) => setOpenAccordion(
    shouldOpen
      ? title
      : null,
  );

  const handleMainLinkClick = () => {
    closeDrawer();
    setOpenAccordion(null);
  };

  return (
    <Drawer
      sx={{ display: { xs: 'block', [extendBr]: 'none' } }}
      anchor="top"
      open={isDrawerOpen}
      onClose={closeDrawer}
    >
      <Toolbar />
      <MenuList>
        {mainLinks.map(({ to, text }) => (
          <NavbarMobileLink key={to} to={to} onClick={handleMainLinkClick}>{text}</NavbarMobileLink>
        ))}
        {linksGroups.map(({ title, links }) => (
          <NavbarMobileMenuAccordion
            key={title}
            title={title}
            links={links}
            closeDrawer={closeDrawer}
            expanded={title === openAccordion}
            hasActiveLink={title === activeLinksGroupTitle}
            onChange={createAccordionChangeHandler(title)}
          />
        ))}
      </MenuList>
    </Drawer>
  );
};
export default NavbarMobileMenu;
