import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoryFormPage from './components/StoryFormPage';


const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
