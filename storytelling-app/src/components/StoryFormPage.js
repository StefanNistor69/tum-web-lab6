import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';

function StoryFormPage({ addStory, darkMode, toggleDarkMode }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const theme = getTheme(darkMode);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content && description) {
      addStory({ title, content, description });
      navigate('/');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <form onSubmit={handleSubmit} style={{ margin: 20 }}>
          <Typography variant="h6">Add a New Story</Typography>
          <TextField
            label="Story Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: 20 }}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ marginBottom: 20 }}
            multiline
            rows={4}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: 20 }}
            multiline
            rows={2}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Story
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default StoryFormPage;