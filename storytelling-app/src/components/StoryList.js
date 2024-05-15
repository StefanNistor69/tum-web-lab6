import React from 'react';
import StoryItem from './StoryItem';

function StoryList({ stories, deleteStory, darkMode, addToFavorites }) {
  return (
    <div style={{ margin: 20 }}>
      {stories.map(story => (
        <StoryItem key={story.id} story={story} deleteStory={deleteStory} darkMode={darkMode} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
}

export default StoryList;
