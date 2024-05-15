import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoryFormPage from './components/StoryFormPage';
import StoryViewPage from './components/StoryViewPage';
import FavoritesPage from './components/FavoritesPage';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stories, setStories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    
    const savedStories = JSON.parse(localStorage.getItem('stories'));
    if (savedStories) {
      setStories(savedStories);
    }

    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      localStorage.setItem('darkMode', !prevMode);
      return !prevMode;
    });
  };

  const addStory = (newStory) => {
    setStories([...stories, { id: stories.length + 1, ...newStory }]);
  };

  const deleteStory = (id) => {
    setStories(stories.filter(story => story.id !== id));
  };

  const addToFavorites = (story) => {
    if (!favorites.some(fav => fav.id === story.id)) {
      setFavorites([...favorites, story]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(story => story.id !== id));
  };

  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <App
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                stories={stories}
                deleteStory={deleteStory}
                addToFavorites={addToFavorites}
              />
            }
          />
          <Route
            path="/create-story"
            element={
              <StoryFormPage
                addStory={addStory}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/story/:id"
            element={
              <StoryViewPage
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                stories={stories}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                darkMode={darkMode}
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
