const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// By default, required validation throws error for 0 length String
// Enable 0 length String to work
const isString = function() {
    return typeof this.desc === 'string' ? '' : 'Company description is required';
};

// See if all Strings in array match email regex.
// Additionally check if all emails are unique
const matchEmail = function(arr) {
    let arrLen = arr.length;
    if (arrLen < 4) {
        let checked = [];
        for (let i = 0; i < arrLen; i++) {
            let curr = arr[i];
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(curr) || checked.includes(curr)) {
                return false;
            };
            checked.push(curr);
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
        enum: ['researching', 'pending', 'approved', 'declined'],
        required: 'Status is required'
    },
    desc: {
        type: String,
        trim: true,
        required: isString,
        maxlength: 2
    },
    contacts: {
        type: [String],
        required: 'Company contacts is required',
        validate: {
            validator: matchEmail,
            message: props => `${props.value} is not valid email`
        }
    },
    performance: {
        type: Number,
        required: 'Performance score is required',
        min: 1,
        max: 10
    }
});

module.exports = mongoose.model('Company', CompanySchema);