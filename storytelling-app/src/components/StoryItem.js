import React from 'react';
import { Card, CardContent, Typography, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function StoryItem({ story, deleteStory, darkMode, addToFavorites }) {
  return (
    <Card style={{ marginBottom: 20, backgroundColor: darkMode ? '#424242' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
      <CardContent>
        <Typography variant="h5">{story.title}</Typography>
        <IconButton>
          {/* <FavoriteIcon color={story.isFavorite ? 'secondary' : 'disabled'} /> */}
        </IconButton>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => deleteStory(story.id)}
          style={{ marginLeft: 10 }}
        >
          Delete Story
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/story/${story.id}`}
          style={{ marginLeft: 10 }}
        >
          See Story
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => addToFavorites(story)}
          style={{ marginLeft: 10 }}
        >
          Add to Favorites
        </Button>
      </CardContent>
    </Card>
  );
}

export default StoryItem;
