import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchGames = async () => {
  const response = await api.get<GamesModel[]>('/videoGames');

  return response.data;
};

const ApiService = {
  fetchGames,
};

export default ApiService;
