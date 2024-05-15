import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';

const StoryViewPage = ({ darkMode, stories }) => {
  const { id } = useParams();
  const story = stories.find(story => story.id === parseInt(id));
  const theme = getTheme(darkMode);

  if (!story) {
    return <Typography variant="h6">Story not found</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>{story.title}</Typography>
        <Typography variant="h6" gutterBottom>Description:</Typography>
        <Typography paragraph>{story.description}</Typography>
        <Typography variant="h6" gutterBottom>Content:</Typography>
        <Typography paragraph>{story.content}</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to Stories
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default StoryViewPage;
