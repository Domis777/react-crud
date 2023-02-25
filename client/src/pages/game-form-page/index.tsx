/* eslint-disable no-alert */
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
import * as Styled from './styled';
import GameIconButton from './icon-button';
import getGamesFromData from './helper';
import useGame from '../../components/hooks/use-game';
import getModeData from './data';

const GameFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, loadingGameData] = useGame(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(id !== undefined ? 'update' : 'create');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getGamesFromData(formRef.current);
      await ApiService.createGame(values);
      navigate(routes.HomePage);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  if (loadingGameData) return null;

  console.log('Updating Data');
  console.log(game);

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
          <GameField color={color} />
          <GameCheckbox
            paperColor={colorMain}
            CheckboxColor={color}
          />
          <GameNumberField color={color} />
          <GameImageField
            FieldColor={color}
            iconColor={color}
            TypoColor={colorMain}
            btnColor={color}
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
