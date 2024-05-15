import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container } from '@material-ui/core';

function StoryFormPage({ addStory }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content && description) {
      addStory({ title, content, description });
      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ margin: 20 }}>
        <Typography variant="h6">Add a New Story</Typography>
        <TextField
          label="Story Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: 20 , color:" black"}}
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
  );
}

export default StoryFormPage;
