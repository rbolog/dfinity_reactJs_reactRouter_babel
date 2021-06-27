import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ErrorBoundary from './components/error_boundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);