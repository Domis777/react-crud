import React from 'react';
import {
  Stack,
  Typography,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ApiService from 'services/api-services';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import GameField from './title-publisher-field';
import GameNumberField from './rating-price-field';
import GameImageField from './image-field';
import GameCheckbox from './checkbox';
import * as Styled from './styled/styled';
import GameIconButton from './icon-button';
import getGamesFromData from './helper';
import useGame from '../../hooks/use-game';
import { getModeData } from './data/form-data';

const GameFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, loadingGameData] = useGame(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const mode = id !== undefined ? 'update' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getGamesFromData(formRef.current);
      if (mode === 'create') {
        await ApiService.createGame(values);
        navigate(routes.HomePage);
      } else {
        await ApiService.updateGame(id, { ...values });
        navigate(routes.HomePage);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  if (loadingGameData) return null;

  return (
    <Styled.StyledAddLayout>
      <Styled.StyledPaper sx={{ borderColor: colorMain }}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <SportsEsportsIcon sx={{ fontSize: 50 }} color={color} />
          <Typography variant="h5" color={colorMain}>{title}</Typography>
          <GameField
            color={color}
            titleValue={game?.title}
            PublisherValue={game?.information.publisher}
          />
          <GameCheckbox
            paperColor={colorMain}
            CheckboxColor={color}
            isCheckGenres={game?.information.genres}
            isCheckPlatforms={game?.information.platforms}
          />
          <GameNumberField
            color={color}
            ratingValue={game?.metacritic}
            priceValue={game?.price.slice(0, -1)}
          />
          <GameImageField
            FieldColor={color}
            iconColor={color}
            TypoColor={colorMain}
            btnColor={color}
            imageValue={game?.image}
          />
          <GameIconButton
            btnText={btnText}
            onClick={() => navigate(routes.HomePage)}
          />
        </Stack>
      </Styled.StyledPaper>
    </Styled.StyledAddLayout>
  );
};

export default GameFormPage;
