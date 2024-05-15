import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <>
      <CssBaseline />
      <Header darkMode={darkMode} handleToggleDarkMode={toggleDarkMode} />
      <StoryForm />
      <StoryList />
    </>
  );
}

export default App;
