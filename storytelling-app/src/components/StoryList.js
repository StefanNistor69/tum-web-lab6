import React from 'react';
import StoryItem from './StoryItem';

function StoryList({ stories, deleteStory, darkMode }) {
  return (
    <div style={{ margin: 20 }}>
      {stories.map(story => (
        <StoryItem key={story.id} story={story} deleteStory={deleteStory} darkMode={darkMode} />
      ))}
    </div>
  );
}

export default StoryList;
