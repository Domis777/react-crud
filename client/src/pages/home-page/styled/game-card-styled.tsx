import {
  styled,
  Card as MuiCard,
} from '@mui/material';

const VideoGameCard = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderRadius: '15px',
  boxShadow: `5px 5px 10px 0 ${theme.palette.common.black}`,
  border: `4px solid ${theme.palette.primary.main}`,
}));

export default VideoGameCard;
