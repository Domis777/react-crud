import {
  styled,
  Stack as MuiStack,
} from '@mui/material';

const StyledTitlePublisherContainer = styled(MuiStack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
}));

export default StyledTitlePublisherContainer;
