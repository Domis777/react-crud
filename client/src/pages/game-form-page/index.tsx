/* eslint-disable no-alert */
import React from 'react';
import {
  Stack,
  Typography,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ApiService from 'services/api-services';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import GameField from './title-publisher-field';
import GameNumberField from './rating-price-field';
import GameImageField from './image-field';
import GameCheckbox from './checkbox';
import * as Styled from './styled';
import GameIconButton from './icon-button';
import getGamesFromData from './helper';

const GameFormPage = () => {
  // const { id } = useParams();
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getGamesFromData(formRef.current);
      // await ApiService.createGame(values);
      // navigate(routes.HomePage);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  return (
    <Styled.StyledAddLayout>
      <Styled.StyledPaper>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <SportsEsportsIcon sx={{ fontSize: 50 }} color="primary" />
          <Typography variant="h5" color="primary">Add new Video Game</Typography>
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
