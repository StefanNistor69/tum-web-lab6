import React from 'react';
import ReactDOM from 'react-dom/client'; // Note this import path for React 18
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'; // Make sure to use '@mui/material' if using MUI
import theme from './theme'; // Ensure 'theme.js' is correctly configured and exported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
