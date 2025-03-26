import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavortiePage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <SearchPage />
      },
      {
        path: 'favorite',
        element: <FavoritePage />
      }
    ]
  }
]);
