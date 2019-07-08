const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// See if all Strings in array match email regex.
// Additionally check if all emails are unique
const matchEmail = function(arr) {
    if (arr.length < 4) {
        let checked = [];
        for (let i = 0; i < arr.length; i++) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(arr[i]) || checked.includes(arr[i])) {
                return false;
            };
            checked.push(arr[i]);
        };
        return true;
    } else {
        return false;
    };
};

const CompanySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Company name is required',
        unique: true,
        minlength: 1,
        maxlength: 30
    },
    status: {
        type: String,
        enum: ['Researching', 'Pending', 'Approved', 'Declined'],
        required: 'Status is required'
    },
    performance: {
        type: Number,
        required: 'Performance score is required',
        min: 0,
        max: 10
    },
    desc: {
        type: String,
        trim: true,
        required: 'Company description is required',
        maxlength: 200
    },
    contacts: {
        type: [String],
        required: 'Company contacts is required',
        validate: {
            validator: matchEmail,
            message: props => `${props.value} is not valid email`
        }
    }
});

module.exports = mongoose.model('Company', CompanySchema);