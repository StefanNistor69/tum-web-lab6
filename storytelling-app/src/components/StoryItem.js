import React from 'react';
import { Card, CardContent, Typography, IconButton, Button } from '@material-ui/core';
// import FavoriteIcon from '@mui/icons-material/Favorite';

function StoryItem({ story, deleteStory }) {
  return (
    <Card style={{ marginBottom: 20 }}>
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
      </CardContent>
    </Card>
  );
}

export default StoryItem;
