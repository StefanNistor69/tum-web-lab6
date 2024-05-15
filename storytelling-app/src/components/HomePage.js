import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';
import StoryList from './StoryList';

const HomePage = ({ darkMode, toggleDarkMode, stories, addToFavorites, deleteStory }) => {
  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>Home</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-story"
          style={{ margin: '10px 0' }}
        >
          Create Story
        </Button>
        <Button
          variant="contained"
          color="default"
          component={Link}
          to="/favorites"
          style={{ margin: '10px 10px' }}
        >
          View Favorites
        </Button>
        <StoryList stories={stories} deleteStory={deleteStory} darkMode={darkMode} addToFavorites={addToFavorites} />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
