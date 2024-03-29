const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true


    },
    password: {
        type: String,
        require: true

    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('User', userSchema)