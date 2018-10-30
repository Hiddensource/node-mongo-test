var mongosse = require('mongoose');

var User = mongosse.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    User
};