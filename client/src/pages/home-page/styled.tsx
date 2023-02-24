/* eslint-disable import/prefer-default-export */
import { styled, Card, Stack } from '@mui/material';

export const GamesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
  maxWidth: theme.breakpoints.values.xl,
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const VideoGameCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderRadius: '15px',
  boxShadow: `5px 5px 10px 0 ${theme.palette.common.black}`,
  border: `4px solid ${theme.palette.primary.main}`,
}));

export const ActionButton = styled(Stack)({
  flexDirection: 'row',
  position: 'absolute',
  right: 0,
  margin: 5,
  gap: 5,
});
