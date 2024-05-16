import React from 'react';
import { Link } from 'react-router-dom';
import { Container, CssBaseline, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';
import StoryList from './StoryList';
import logo from '../assets/logoSite.png'; // Ensure your logo image is in the correct path

const HomePage = ({ darkMode, toggleDarkMode, stories, addToFavorites, deleteStory }) => {
  const theme = getTheme(darkMode);

  const styles = {
    section1: {
       // Replace with your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px 0',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '600px',
    },
    section2: {
      backgroundColor: darkMode ? '#424242' : '#ffffff',
      padding: '20px 0',
    },
    button: {
      margin: '10px',
    },
    logo: {
      width: '350px', // Adjust the logo size as needed
      marginBottom: '20px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={styles.section1}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-story"
          style={styles.button}
        >
          Create Story
        </Button>
        <Button
          variant="contained"
          color="default"
          component={Link}
          to="/favorites"
          style={styles.button}
        >
          View Favorites
        </Button>
      </div>
      <div style={styles.section2}>
        <Container>
          <StoryList stories={stories} deleteStory={deleteStory} darkMode={darkMode} addToFavorites={addToFavorites} />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;