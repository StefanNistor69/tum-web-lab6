import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

function StoryItem({ story, deleteStory, darkMode, addToFavorites }) {
  return (
    <Card style={{ marginBottom: 20, backgroundColor: darkMode ? '#424242' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
      <CardMedia
        component="img"
        alt={story.title}
        height="140"
        image="https://source.unsplash.com/random" // Replace with your story image URL
        title={story.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {story.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {story.description}
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/story/${story.id}`}
            startIcon={<VisibilityIcon />}
          >
            See Story
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={() => addToFavorites(story)}
            startIcon={<FavoriteIcon />}
          >
            Add to Favorites
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteStory(story.id)}
            startIcon={<DeleteIcon />}
          >
            Delete Story
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StoryItem;
