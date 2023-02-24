import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import SingleGamePage from 'pages/single-game-page';
import HomePage from 'pages/home-page/index';
import GameFormPage from 'pages/game-form-page/index';
import routes from './routes';

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
        path: routes.SingleGamePage.path,
        element: <SingleGamePage />,
      },
      {
        path: routes.GameFormPage,
        element: <GameFormPage />,
      },
      {
        path: routes.UpdateGamePage.path,
        element: <GameFormPage />,
      },
    ],
  },
]);

export default router;
