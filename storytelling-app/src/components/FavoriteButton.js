import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function FavoriteButton({ isFavorite, toggleFavorite }) {
  return (
    <IconButton onClick={toggleFavorite}>
      <FavoriteIcon color={isFavorite ? 'secondary' : 'disabled'} />
    </IconButton>
  );
}

export default FavoriteButton;
