import React from 'react';
import { Container, Box } from '@mui/material';
import ApiService from 'services/api-services';
import HouseCard from './house-card';
import * as Styled from './styles';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Styled.HouseGrid>
      { houses.map((house) => (<HouseCard key={house.id} {...house} />)) }
    </Styled.HouseGrid>
  );
};

export default HomePage;
