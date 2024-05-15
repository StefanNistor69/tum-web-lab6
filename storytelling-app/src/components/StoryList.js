import React from 'react';
import StoryItem from './StoryItem';

function StoryList({ stories, deleteStory, darkMode, addToFavorites }) {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
  };

  return (
    <div style={styles.grid}>
      {stories.map(story => (
        <StoryItem key={story.id} story={story} deleteStory={deleteStory} darkMode={darkMode} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
}

export default StoryList;
