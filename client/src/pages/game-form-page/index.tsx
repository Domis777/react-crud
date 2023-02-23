import React from 'react';
import {
  Stack,
  Typography,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GameField from './game-title-publisher-field';
import GameNumberField from './game-rating-price-field';
import GameImageField from './game-image-field';
import GameCheckbox from './game-checkbox';
import GameIconButton from './game-icon-button';
import * as Styled from './styled';

const GameFormPage = () => (
  <Styled.StyledAddLayout>
    <Styled.StyledPaper>
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <SportsEsportsIcon sx={{ fontSize: 50 }} color="primary" />
        <Typography variant="h5" color="primary">Add new Video Game</Typography>
        <GameField />
        <GameCheckbox />
        <GameNumberField />
        <GameImageField />
      </Stack>
      <GameIconButton />
    </Styled.StyledPaper>
  </Styled.StyledAddLayout>
);

export default GameFormPage;
