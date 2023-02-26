import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import {
  Box,
  Paper,
  Container,
} from '@mui/material';
import { Pagination, Navigation } from 'swiper';
import Img from 'components/ui/img';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as Styled from './styled/styled';
import useGame from '../../hooks/use-game';
import SingleGameTypography from './single-game-typography';

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

  return (
    <Container sx={{ mt: 3, mb: 3 }}>
      <Styled.PaperContainer>
        <Styled.BoxContainer>
          <Box sx={{ width: 1 }}>
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
          <SingleGameTypography
            title={game.title}
            genres={game.information.genres.join(', ')}
            platforms={game.information.platforms.join(', ')}
            publisher={game.information.publisher}
            price={game.price}
            rating={game.metacritic}
          />
        </Styled.BoxContainer>
      </Styled.PaperContainer>
    </Container>
  );
};

export default SingleGamePage;
