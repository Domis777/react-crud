import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { routes } from 'navigation/routes';
import { styled, Box } from '@mui/material';
import { Pagination, Navigation } from 'swiper';
import Img from 'components/ui/img';
import ApiService from 'services/api-services';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: `5px solid ${theme.palette.primary.main}`,
  borderRadius: '20px',
  color: theme.palette.common.white,
  fontSize: '25px',
  boxShadow: `5px 5px 12px 0 ${theme.palette.common.black}`,
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
  },
  '.swiper-pagination-bullet-active': {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    opacity: 1,
  },
}));

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
        <StyledSwiper
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
        </StyledSwiper>
      </Box>
    </Box>
  );
};

export default SingleGamePage;
