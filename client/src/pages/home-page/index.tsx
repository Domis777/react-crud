import React from 'react';
import { Container, Box } from '@mui/material';
import ApiService from 'services/api-services';
import GamesCard from './games-card';
import * as Styled from './styles';

const HomePage = () => {
  const [games, setGames] = React.useState<GamesModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedGames = await ApiService.fetchGames();
      setGames(fetchedGames);
    })();
  }, []);

  return (
    <Styled.GamesGrid>
      { games.map((game) => (<GamesCard key={game.id} {...game} />)) }
    </Styled.GamesGrid>
  );
};

export default HomePage;
