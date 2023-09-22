const StoryController = require('../controllers/Story.controller');

module.exports = app => {
    //* Find All
    app.get('/api/stories', StoryController.findAllStories);
    //* Find One
    app.get('/api/stories/:id', StoryController.findOneStory);
    //* Create
    app.post('/api/stories', StoryController.createStory);
    //* Update
    app.patch('/api/stories/:id', StoryController.updateStory);
    //* Delete
    app.delete('/api/stories/:id', StoryController.deleteStory);
}