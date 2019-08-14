let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var User = new Schema({
  
    phone: {
        type: Number,
        required: true
    }, 
    ime: {
        type: String
    }
});

module.exports = mongoose.model('User', User);

