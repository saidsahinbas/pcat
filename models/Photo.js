const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    title: String,
    description: String,
    image: String, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;