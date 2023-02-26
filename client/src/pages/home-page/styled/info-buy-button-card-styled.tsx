import {
  styled,
  CardActions as MuiCardActions,
  IconButton as MuiIconButton,
} from '@mui/material';

export const CardActionsContainer = styled(MuiCardActions)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  justifyContent: 'space-between',
}));

export const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  size: 'medium',
  border: '3px solid',
}));
