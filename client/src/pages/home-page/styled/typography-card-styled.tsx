import {
  styled,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from '@mui/material';

export const TypographyCardContainer = styled(MuiCardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const TypographyCardTitle = styled(MuiTypography)({
  fontSize: '22px',
  component: 'div',
  textAlign: 'center',
});

export const TypographyCardContentTitle = styled(MuiTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  color: theme.palette.primary.main,
}));

export const TypographyCardContent = styled(MuiTypography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
}));
