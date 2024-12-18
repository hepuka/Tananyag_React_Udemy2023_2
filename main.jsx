//eredeti main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/23.Wild-oasis/App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './src/23.Wild-oasis/ui/ErrorFallback.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
