import {
  styled,
  Stack as MuiStack,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
} from '@mui/material';

export const StyledIconButtonContainer = styled(MuiStack)(({ theme }) => ({
  marginTop: theme.spacing(3),
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  gap: theme.spacing(2),
  width: '100%',
}));

export const StyledIconButton = styled(MuiIconButton)(() => ({
  type: 'submit',
  border: '3px solid',
  borderRadius: '5px',
  padding: '5px',
  size: 'large',
}));

export const StyledTypography = styled(MuiTypography)(() => ({
  component: 'legend',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  marginRight: '3px',
  marginLeft: '3px',
}));
