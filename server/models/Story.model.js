const mongoose = require("mongoose");

//* Schema

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    }
}, { timestamps: true });

module.exports = mongoose.model("Story", StorySchema);
