const Story = require('../models/Story.model');

//* Find All
module.exports.findAllStories = (req, res) => {
    Story.find()
        .then(allStories => {
            res.json(allStories)
        })
        .catch(err => {
            res.json({ message: 'Error finding all Stories', error: err })
        });
}

//* Find One
module.exports.findOneStory = (req, res) => {
    Story.findOne({ _id: req.params.id })
        .then(story => {
            res.json(story)
        })
        .catch(err => {
            res.json({ message: 'Error finding one story', error: err })
        });
}

//* Create
module.exports.createStory = (req, res) => {
    Story.create(req.body)
        .then(newStory => {
            res.json(newStory)
        })
        .catch(err => {
            res.json({ message: 'Error creating a new story', error: err })
        });
}

//? Update
module.exports.updateStory = (req, res) => {
    Story.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedStory => {
            res.json(updatedStory)
        })
        .catch(err => {
            res.json({ message: 'Error updating one story', error: err })
        });
}


//! Delete
module.exports.deleteStory = (req, res) => {
    Story.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ message: 'Error deleting one story', error: err })
        });
}