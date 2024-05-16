import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

function StoryItem({ story, deleteStory, darkMode, addToFavorites }) {
  const styles = {
    card: {
      marginBottom: 20,
      backgroundColor: darkMode ? '#424242' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      width: '350px',
    },
    media: {
      height: '140px',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    button: {
      minWidth: '50px',
      padding: '5px 10px',
      margin: '0 5px',
      fontSize: '0.8em',
    },
  };

  return (
    <Card style={styles.card}>
      <CardMedia
        component="img"
        alt={story.title}
        height="140"
        image="https://source.unsplash.com/random" // Replace with your story image URL
        title={story.title}
        style={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
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
            style={styles.button}
          >
            See
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={() => addToFavorites(story)}
            startIcon={<FavoriteIcon />}
            style={styles.button}
          >
            Fav
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteStory(story.id)}
            startIcon={<DeleteIcon />}
            style={styles.button}
          >
            Del
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StoryItem;