import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

type GetGames = Omit<GamesModel, 'id'>;

const fetchGames = async () => {
  const response = await api.get<GamesModel[]>('/videoGames');

  return response.data;
};

const fetchGame = async (id: string | number) => {
  const response = await api.get<GamesModel>(`/videoGames/${id}`);

  return response.data;
};

const createGame = async (createNewGames: GetGames) => {
  const response = await api.post<GamesModel>('/videoGames', createNewGames);

  return response.data;
};

const deleteGame = async (id: string | number) => {
  const response = await api.delete<GamesModel>(`/videoGames/${id}`);

  return response.data;
};

const updateGame = async (id: string | undefined, updateGames: GetGames) => {
  const response = await api.patch<GamesModel>(`/videoGames/${id}`, updateGames);

  return response.data;
};

const ApiService = {
  fetchGames,
  fetchGame,
  createGame,
  deleteGame,
  updateGame,
};

export default ApiService;
