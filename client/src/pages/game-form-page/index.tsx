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

const GameFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, loadingGameData] = useGame(id);
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

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

  return (
    <Styled.StyledAddLayout>
      <Styled.StyledPaper>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <SportsEsportsIcon sx={{ fontSize: 50 }} color={id !== undefined ? 'warning' : 'primary'} />
          <Typography variant="h5" color="primary">{id !== undefined ? 'Update Video Game' : 'Add new Video Game'}</Typography>
          <GameField />
          <GameCheckbox />
          <GameNumberField />
          <GameImageField />
          <GameIconButton
            onClick={() => navigate(routes.HomePage)}
          />
        </Stack>
      </Styled.StyledPaper>
    </Styled.StyledAddLayout>
  );
};

export default GameFormPage;
