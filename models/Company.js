const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Company name is required',
        unique: true,
        minlength: 1,
        maxlength: 50
    },
    status: {
        type: String,
        enum: ['researching', 'pending', 'approved', 'declined'],
        required: 'Status is required'
    },
    desc: {
        type: String,
        trim: true,
        maxlength: 2
    },

    performance: {
        type: Number,
        required: 'Performance score is required',
        min: 1,
        max: 10
    }
});

module.exports = mongoose.model('Company', CompanySchema);