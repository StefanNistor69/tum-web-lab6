import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Container, Button } from '@material-ui/core';
import Header from './components/Header';
import StoryList from './components/StoryList';

function App({ darkMode, toggleDarkMode, stories, deleteStory }) {
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
        <StoryList stories={stories} deleteStory={deleteStory} />
      </Container>
    </>
  );
}

export default App;
