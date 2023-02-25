import { Theme, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const navbarDesktopItemStyles = (theme: Theme) => ({
  flexGrow: 1,
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },
});

export const Link = styled(NavLink)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: 'none',
  color: theme.palette.common.black,
  padding: theme.spacing(0.5, 2),
  '&.active': {
    boxShadow: `
      inset 4px 0 0 ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));
