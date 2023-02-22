import React from 'react';
import ApiService from 'services/api-services';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GamesCard from './games-card';
import * as Styled from './styled';
import { routes } from '../../navigation/routes';

const HomePage = () => {
  const [games, setGames] = React.useState<GamesModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedGames = await ApiService.fetchGames();
      setGames(fetchedGames);
    })();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Button
        sx={{ border: 2, fontWeight: '600' }}
        variant="outlined"
        size="large"
        onClick={() => navigate(routes.GameFormPage)}
      >
        Add
      </Button>
      <Styled.GamesGrid>
        { games.map((game) => (<GamesCard key={game.id} {...game} />)) }
      </Styled.GamesGrid>
    </Container>
  );
};

export default HomePage;
