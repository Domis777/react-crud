import {
  styled,
  Stack as MuiStack,
} from '@mui/material';

const StyledRatingPriceContainer = styled(MuiStack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%',
}));

export default StyledRatingPriceContainer;
