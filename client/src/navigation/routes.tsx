const singleGameRoot = '/videoGames/';

const staticRoutes = {
  HomePage: '/',
  GameFormPage: '/game-form',
} as const;

const dinamicRoutes = {
  SingleGamePage: {
    path: `${singleGameRoot}:id`,
    createLink: (id: string | number) => `${singleGameRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dinamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
