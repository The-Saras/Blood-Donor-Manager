const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bg: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    }

});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
