const storyModel = require('../models/storyModel');

exports.getStories = (req, res) => {
  const stories = storyModel.getStories();
  res.status(200).json(stories);
};

exports.getStoryById = (req, res) => {
  const story = storyModel.getStoryById(req.params.id);
  if (!story) return res.status(404).json({ message: 'Story not found' });
  res.status(200).json(story);
};

exports.createStory = (req, res) => {
  const { title, description, content } = req.body;
  const story = storyModel.createStory(title, description, content, req.user.userId);
  res.status(201).json(story);
};

exports.updateStory = (req, res) => {
  const { title, description, content } = req.body;
  const story = storyModel.updateStory(req.params.id, title, description, content);
  if (!story) return res.status(404).json({ message: 'Story not found' });
  res.status(200).json(story);
};

exports.deleteStory = (req, res) => {
  const success = storyModel.deleteStory(req.params.id);
  if (!success) return res.status(404).json({ message: 'Story not found' });
  res.status(200).json({ message: 'Story deleted' });
};
