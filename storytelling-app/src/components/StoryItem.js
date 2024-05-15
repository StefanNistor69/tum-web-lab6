import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function StoryItem({ story }) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <Typography variant="h5">{story.title}</Typography>
        <IconButton>
          <FavoriteIcon color={story.isFavorite ? 'secondary' : 'disabled'} />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default StoryItem;
