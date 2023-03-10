const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/evenTracker', {
userNewUrlParser: true
},
err =>{
    if (!err) {
        console.log('Connection successed');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./event.model');