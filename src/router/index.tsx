import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';

export const routers = [
  {
    path: '/',
    component: <MainPage />,
  },
  {
    path: '*',
    component: <ErrorPage />,
  },
];
