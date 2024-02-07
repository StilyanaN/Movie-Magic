const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        max: 120,
        min: 1,
    },
    born: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9\s]+$/,
        minLength: [10, 'Born should be at least 10 characters long!'],
    },
    nameInMovie: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9\s]+$/,
        minLength: [5, 'Character should be at least characters long!'],
    },
    castImage: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return /^https?:\/\//.test(value)
            },
            message:(props) => `This is invalid url for the castImage!`
        }
    },
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;