import React from 'react';
import ApiService from 'services/api-services';

const useGame = (id: string | undefined) => {
  const [game, setGame] = React.useState<undefined | GamesModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedVideoGame = await ApiService.fetchGame(id);
        setGame(fetchedVideoGame);
        setLoading(false);
      })();
    }
  }, []);

  return [game, loading] as const;
};

export default useGame;
