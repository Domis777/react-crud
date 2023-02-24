import React from 'react';
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Stack,
  IconButton,
  Rating,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import Img from 'components/ui/img';
import ApiService from 'services/api-services';
import * as Styled from './styled';

type GamesCardProps = GamesModel;

const GamesCard: React.FC<GamesCardProps> = ({
  id,
  title,
  information,
  image,
  price,
  metacritic,
}) => {
  const navigate = useNavigate();

  const deleteGames = async (gameId: string | number) => {
    await ApiService.deleteGame(gameId);
    window.location.reload();
  };

  const raitings = metacritic / 20;

  return (
    <Styled.VideoGameCard>
      <Box position="relative">
        <Styled.ActionButton>
          <IconButton
            sx={{
              border: 3,
              borderColor: 'common.white',
              p: '5px',
              bgcolor: 'warning.main',
              '&:hover': {
                bgcolor: 'warning.light',
              },
            }}
            size="medium"
            color="error"
            onClick={() => navigate(routes.UpdateGamePage.createLink(id))}
          >
            <ModeEditOutlinedIcon sx={{ color: 'common.white', fontSize: '25px' }} />
          </IconButton>
          <IconButton
            sx={{
              border: 3,
              borderColor: 'common.white',
              p: '5px',
              bgcolor: 'error.main',
              '&:hover': {
                bgcolor: 'error.light',
              },
            }}
            size="medium"
            color="error"
            onClick={() => deleteGames(id)}
          >
            <DeleteOutlineIcon sx={{ color: 'common.white', fontSize: '25px' }} />
          </IconButton>
        </Styled.ActionButton>
        <CardMedia>
          <Img
            src={image[0]}
            alt=""
            sx={{
              aspectRatio: '1',
              width: 1,
              borderRadius: '15px',
              border: 3,
              borderColor: 'primary.main',
            }}
          />
        </CardMedia>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        >
          <Typography gutterBottom variant="h5" component="div" textAlign="center">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{information.genres.join(', ')}</Typography>
          <Typography variant="body2" color="text.secondary">{information.platforms.join(', ')}</Typography>
          <Typography variant="body2" color="text.secondary">{information.publisher}</Typography>
        </CardContent>
      </Box>
      <Box>
        <Stack direction="row" sx={{ p: 2, justifyContent: 'space-between' }}>
          <Rating
            name="read-only"
            value={raitings}
            precision={0.25}
            size="medium"
            readOnly
          />

          <Box color="success.main">{price}</Box>
        </Stack>
        <CardActions sx={{ pr: 2, pl: 2, justifyContent: 'space-between' }}>
          <IconButton
            color="primary"
            size="medium"
            sx={{ border: 3 }}
            onClick={() => navigate(routes.SingleGamePage.createLink(id))}
          >
            <InfoOutlinedIcon fontSize="medium" />
          </IconButton>
          <IconButton color="primary" size="medium" sx={{ border: 3 }}>
            <AddShoppingCartIcon fontSize="medium" />
          </IconButton>
        </CardActions>
      </Box>
    </Styled.VideoGameCard>
  );
};
export default GamesCard;
