import React, { useState } from 'react';
import Header from './components/Header';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import { CssBaseline } from '@material-ui/core';

function App({ darkMode, toggleDarkMode }) {
  const [stories, setStories] = useState([]);

  const addStory = (newStory) => {
    setStories([...stories, { id: stories.length + 1, title: newStory, isFavorite: false }]);
  };

  const deleteStory = (id) => {
    setStories(stories.filter(story => story.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Header darkMode={darkMode} handleToggleDarkMode={toggleDarkMode} />
      <StoryForm addStory={addStory} />
      <StoryList stories={stories} deleteStory={deleteStory} />
    </>
  );
}

export default App;
