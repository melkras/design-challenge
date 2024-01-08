import React from 'react';
import { ThemeProvider } from '../hooks/use-theme';
import App from '../App';

export const Page: React.FC = () => {

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>

  );
};
