import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import DefaultFallback from './components/shared/fallback/DefaultFallback';
import LoadingFallback from './components/shared/fallback/LoadingFallback';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<DefaultFallback />}>
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);
