// schema

const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema( {
    Alphabet: {
        type: String,
        required: 'This field is required'
        
    },

    Country of origin: {
        type: String,
        required: 'This field is required'
    },

    Date: {
        type: String,
        required: 'This field is required'
    },
    Resturant Name: {
        type: String,
        required: 'This field is required'
    },
    Comments: {
        type: String,
        required: 'This field is required'
    },
});

mongoose.model('event', eventSchema);