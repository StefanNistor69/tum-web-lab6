class Story {
  constructor(id, title, description, content, author) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.content = content;
    this.author = author;
  }
}

class StoryModel {
  constructor() {
    this.stories = [];
  }

  createStory(title, description, content, author) {
    const id = this.stories.length + 1;
    const story = new Story(id, title, description, content, author);
    this.stories.push(story);
    return story;
  }

  getStories() {
    return this.stories;
  }

  getStoryById(id) {
    return this.stories.find(story => story.id === parseInt(id));
  }

  updateStory(id, title, description, content) {
    const story = this.getStoryById(id);
    if (story) {
      story.title = title;
      story.description = description;
      story.content = content;
      return story;
    }
    return null;
  }

  deleteStory(id) {
    const index = this.stories.findIndex(story => story.id === parseInt(id));
    if (index !== -1) {
      this.stories.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new StoryModel();
