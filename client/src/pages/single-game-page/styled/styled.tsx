import { styled, Box as MuiBox } from '@mui/material';
import { Swiper } from 'swiper/react';

export const BoxContainer = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

export const PaperContainer = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  borderRadius: '15px',
  border: '5px solid',
  borderColor: theme.palette.primary.main,
  boxShadow: '5px 5px 10px 0',
}));

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  border: `5px solid ${theme.palette.primary.main}`,
  borderRadius: '20px',
  color: theme.palette.common.white,
  fontSize: '25px',
  height: 'none',
  boxShadow: `5px 5px 12px 0 ${theme.palette.common.black}`,
  '.swiper-slide': {
    height: 'auto',
  },
  '.swiper-button-next': {
    color: theme.palette.primary.dark,
    fontWeight: 900,
  },
  '.swiper-button-prev': {
    color: theme.palette.primary.dark,
    fontWeight: 900,
  },
  '.swiper-button-next:after': {

  },
  '.swiper-pagination-bullet': {
    width: '40px',
    height: '40px',
    background: theme.palette.primary.dark,
    opacity: 0.7,
    top: 0,
  },
  '.swiper-pagination-bullet-active': {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    opacity: 1,
  },
}));
