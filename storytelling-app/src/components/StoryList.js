import React from 'react';
import StoryItem from './StoryItem';

function StoryList({ stories, deleteStory }) {
  return (
    <div style={{ margin: 20 }}>
      {stories.map(story => (
        <StoryItem key={story.id} story={story} deleteStory={deleteStory} />
      ))}
    </div>
  );
}

export default StoryList;
