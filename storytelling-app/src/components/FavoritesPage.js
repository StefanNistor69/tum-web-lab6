import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';
import StoryList from './StoryList';

const FavoritesPage = ({ darkMode, favorites, removeFromFavorites }) => {
  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>Favorites</Typography>
        {favorites.length === 0 ? (
          <Typography variant="h6">No favorite stories yet</Typography>
        ) : (
          <StoryList stories={favorites} deleteStory={removeFromFavorites} darkMode={darkMode} />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default FavoritesPage;
