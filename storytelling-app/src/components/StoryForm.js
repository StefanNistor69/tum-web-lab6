import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function StoryForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Story Added:', title); // Here you would add the story to state or backend
    setTitle('');
  };

  return (
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
      <Button type="submit" variant="contained" color="primary">
        Add Story
      </Button>
    </form>
  );
}

export default StoryForm;
