import {
  styled,
  Stack as MuiStack,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
} from '@mui/material';

export const StyledImgFieldContainer = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(1),
  alignItems: 'self-start',
}));

export const StyledImgFieldButton = styled(MuiStack)(({ theme }) => ({
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  paddingBottom: theme.spacing(1),
}));

export const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  border: '3px solid',
  borderRadius: '5px',
  padding: '5px',
  marginRight: theme.spacing(0.5),
}));

export const StyledTypography = styled(MuiTypography)(() => ({
  component: 'legend',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
}));
