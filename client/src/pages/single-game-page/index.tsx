import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import { Box } from '@mui/material';
import { Pagination, Navigation } from 'swiper';
import Img from 'components/ui/img';
import ApiService from 'services/api-services';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as Styled from './styled';

const SingleGamePage = () => {
  const { id } = useParams();
  const [game, setGame] = React.useState<undefined | GamesModel>(undefined);

  const pagination = {
    clickable: true,
    renderBullet(index: number, className: any) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedVideoGame = await ApiService.fetchGame(id);
        setGame(fetchedVideoGame);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (game === undefined) return null;

  return (
    <Box component="pre" display="flex" flexDirection="column" alignItems="center">
      <Box sx={{ width: '90%', height: '100vh' }}>
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
    </Box>
  );
};

export default SingleGamePage;
