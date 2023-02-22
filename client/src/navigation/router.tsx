import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import SingleGamePage from 'pages/single-game-page';
import HomePage from 'pages/home-page/index';
import GameFormPage from 'pages/game-form-page/index';
import { routes, routesPath } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routesPath.SingleGamePage.path,
        element: <SingleGamePage />,
      },
      {
        path: routes.GameFormPage,
        element: <GameFormPage />,
      },
    ],
  },
]);

export default router;
