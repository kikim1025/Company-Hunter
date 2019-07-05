const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Contact name is required',
        unique: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        required: 'Contact email is required',
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    },
    desc: {
        type: String,
        trim: true,
        required: 'Contact description is required',
        maxlength: 200
    }
});

module.exports = mongoose.model('Contact', ContactSchema);