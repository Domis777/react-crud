/* eslint-disable import/prefer-default-export */
import {
  styled,
  Stack as MuiStack,
  Paper as MuiPaper,
} from '@mui/material';

export const StyledAddLayout = styled(MuiStack)(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export const StyledPaper = styled(MuiPaper)(({ theme }) => ({
  component: 'form',
  padding: theme.spacing(3),
  elevation: 6,
  border: '3px solid',
  borderColor: theme.palette.primary.main,
  boxShadow: '5px 5px 10px 0 common.black',
  borderRadius: '15px',
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.sm,
  },
}));
