import React from 'react';
import ApiService from 'services/api-services';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GamesCard from './game-card/games-card';
import routes from '../../navigation/routes';
import GamesGrid from './styled/styled';

const HomePage = () => {
  const [games, setGames] = React.useState<GamesModel[]>([]);
  const navigate = useNavigate();

  const deleteGame = async (id: string | number) => {
    await ApiService.deleteGame(id);
    const fetchedGames = await ApiService.fetchGames();
    setGames(fetchedGames);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedGames = await ApiService.fetchGames();
      setGames(fetchedGames);
    })();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Button
        sx={{ border: 3, fontWeight: '600' }}
        variant="outlined"
        size="large"
        onClick={() => navigate(routes.GameFormPage)}
      >
        Add
      </Button>
      <GamesGrid>
        { games.map((game) => (
          <GamesCard
            key={game.id}
            {...game}
            onDelete={() => deleteGame(game.id)}
          />
        )) }
      </GamesGrid>
    </Container>
  );
};

export default HomePage;
