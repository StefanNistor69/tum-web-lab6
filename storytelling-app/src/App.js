import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Container, Button } from '@material-ui/core';
import Header from './components/Header';
import StoryList from './components/StoryList';

function App({ darkMode, toggleDarkMode, stories, deleteStory, addToFavorites }) {
  return (
    <>
      <CssBaseline />
      <Header darkMode={darkMode} handleToggleDarkMode={toggleDarkMode} />
      <Container>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-story"
          style={{ margin: '20px 0' }}
        >
          Create Story
        </Button>
        <Button
          variant="contained"
          color="default"
          component={Link}
          to="/favorites"
          style={{ margin: '20px 0' }}
        >
          View Favorites
        </Button>
        <StoryList stories={stories} deleteStory={deleteStory} darkMode={darkMode} addToFavorites={addToFavorites} />
      </Container>
    </>
  );
}

export default App;