import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import DeleteUpdateButtonCard from './delete-update-button-card';
import VideoGameCard from '../styled/game-card-styled';
import ImgCard from './img-card';
import TypographyCard from './typography-card';
import RatingPriceCard from './rating-price-card';
import InfoBuyButtonCard from './info-buy-button-card';
import ratings from '../../rating-count';

type GamesCardProps = GamesModel & {
  onDelete: VoidFunction
};

const GamesCard: React.FC<GamesCardProps> = ({
  id,
  title,
  information,
  image,
  price,
  metacritic,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <VideoGameCard>
      <Box position="relative">
        <DeleteUpdateButtonCard
          onClick={() => navigate(routes.UpdateGamePage.createLink(id))}
          onDelete={onDelete}
        />
        <ImgCard
          img={image[0]}
        />
        <TypographyCard
          title={title}
          genres={information.genres.join(', ')}
          platforms={information.platforms.join(', ')}
          publisher={information.publisher}
        />
      </Box>
      <Box>
        <RatingPriceCard
          ratings={ratings(metacritic)}
          price={price}
        />
        <InfoBuyButtonCard
          onClick={() => navigate(routes.SingleGamePage.createLink(id))}
        />
      </Box>
    </VideoGameCard>
  );
};
export default GamesCard;
