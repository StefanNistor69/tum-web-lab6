import React from 'react';
import StoryItem from './StoryItem';

function StoryList() {
  // Example data; this would be fetched from state or props in a full app
  const stories = [
    { id: 1, title: "A Journey Through Time", isFavorite: false },
    { id: 2, title: "Mystery of the Old Mansion", isFavorite: true },
  ];

  return (
    <div style={{ margin: 20 }}>
      {stories.map(story => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  );
}

export default StoryList;
