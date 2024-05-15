import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function StoryForm({ addStory }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      addStory(title);
      setTitle('');
    }
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
