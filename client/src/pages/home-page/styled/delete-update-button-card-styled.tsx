import {
  styled,
  Stack as MuiStack,
  IconButton as MuiIconButton,
} from '@mui/material';

export const DeleteUpdateActionButton = styled(MuiStack)({
  flexDirection: 'row',
  position: 'absolute',
  right: 0,
  margin: 5,
  gap: 5,
});

export const StyledDeleteUpdateButton = styled(MuiIconButton)(({ theme }) => ({
  border: '3px solid',
  borderColor: theme.palette.common.white,
  padding: '5px',
  size: 'medium',
}));
