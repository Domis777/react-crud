import routes, { type RouteLink } from 'navigation/routes';
import { Breakpoint } from '@mui/material';

export type Link = {
  to: RouteLink,
  text: string
};
export type LinksGroup = {
  title: string,
  links: Link[],
};

export const mainLinks = [
  { to: routes.HomePage, text: 'Home' },

];

export const linksGroups: LinksGroup[] = [
  // {
  //   title: 'Title',
  //   links: [
  //     { to: routes.GameFormPage, text: 'GameFormPage' },
  //   ],
  // },
];

export const extendBr: Breakpoint = 'md';
