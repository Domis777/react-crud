const singleGameRoot = '/videoGames/';

export const routes = {
  HomePage: '/',
  GameFormPage: '/game-form',
} as const;

export const routesPath = {
  SingleGamePage: {
    path: `${singleGameRoot}:id`,
    createLink: (id: string | number) => `${singleGameRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];
