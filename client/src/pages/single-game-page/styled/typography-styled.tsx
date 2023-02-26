import {
  styled,
  Typography as MuiTypography,
} from '@mui/material';

export const TypographyTitle = styled(MuiTypography)({
  fontSize: '46px',
  align: 'center',
});

export const TypographyContentTitle = styled(MuiTypography)(({ theme }) => ({
  fontSize: '32px',
  color: theme.palette.primary.main,
  align: 'center',
}));

export const TypographyContent = styled(MuiTypography)(({ theme }) => ({
  fontSize: '26px',
  color: theme.palette.text.secondary,
  align: 'center',
}));

export const TypographyRatingPrice = styled(MuiTypography)({
  fontSize: '22px',
  align: 'center',
});
