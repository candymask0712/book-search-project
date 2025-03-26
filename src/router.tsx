import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import SearchPage from './pages/SearchPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
]);
