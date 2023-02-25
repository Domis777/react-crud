import {
  styled,
  Stack as MuiStack,
  Paper as MuiPaper,
} from '@mui/material';

export const StyledCheckBoxPaper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(2),
  elevation: 6,
  border: '2px solid',
  borderRadius: '15px',
  width: '100%',
}));

export const StyledCheckboxContainer = styled(MuiStack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%',
}));
