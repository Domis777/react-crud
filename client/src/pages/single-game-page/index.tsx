import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import {
  Box,
  Paper,
  Container,
  Typography,
} from '@mui/material';
import { Pagination, Navigation } from 'swiper';
import Img from 'components/ui/img';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from '@mui/lab';
import * as Styled from './styled';
import useGame from '../../hooks/use-game';

const SingleGamePage = () => {
  const { id } = useParams();
  const [game] = useGame(id);

  const pagination = {
    clickable: true,
    renderBullet(index: number, className: any) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (game === undefined) return null;

  const raitings = game.metacritic / 20;

  return (
    <Container sx={{ mt: 3, mb: 3 }}>
      <Paper sx={{
        p: 3,
        borderRadius: '15px',
        border: 4,
        borderColor: 'primary.main',
        boxShadow: '5px 5px 10px 0',
      }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Box sx={{ width: 1, height: 'none' }}>
            <Styled.StyledSwiper
              pagination={pagination}
              navigation
              modules={[Pagination, Navigation]}
              loop
            >
              {game.image.map((img) => (
                <SwiperSlide key={img}>
                  <Img
                    src={img}
                    sx={{ width: 1, height: 1 }}
                  />
                </SwiperSlide>
              ))}
            </Styled.StyledSwiper>
          </Box>
          <Typography
            gutterBottom
            variant="h3"
            textAlign="center"
            align="center"
          >
            {game.title}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            align="center"
          >
            Genres:
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
          >
            {game.information.genres.join(', ')}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            align="center"
          >
            Platforms:
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
          >
            {game.information.platforms.join(', ')}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            align="center"
          >
            Publisher:
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
          >
            {game.information.publisher}
          </Typography>
          <Typography
            variant="body1"
            fontSize="large"
            color="warning.light"
            align="center"
          >
            {`Rating: ${game.metacritic}`}
          </Typography>
          <Rating
            name="read-only"
            value={raitings}
            precision={0.25}
            size="large"
            readOnly
          />

          <Typography
            variant="body1"
            fontSize="large"
            color="success.main"
            align="center"
          >
            {`Price: ${game.price}`}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SingleGamePage;
