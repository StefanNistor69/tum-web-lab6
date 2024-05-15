import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, CssBaseline } from '@material-ui/core';
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
        <form style={{ margin: 20 }}>
          <Typography variant="h6">View Story</Typography>
          <TextField
            label="Story Title"
            variant="outlined"
            fullWidth
            value={story.title}
            style={{ marginBottom: 20 }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            value={story.description}
            style={{ marginBottom: 20 }}
            multiline
            rows={2}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={story.content}
            style={{ marginBottom: 20 }}
            multiline
            rows={4}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button variant="contained" color="primary" component={Link} to="/">
            Back to Stories
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default StoryViewPage;
