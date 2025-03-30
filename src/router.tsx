import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SearchPage from './pages/SearchPage';
import LikedPage from './pages/LikedPage';
import NotFound from './NotFound';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <SearchPage />
      },
      {
        path: 'liked',
        element: <LikedPage />
      }
    ]
  }
]);
