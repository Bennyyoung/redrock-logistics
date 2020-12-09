const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiverSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    city: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    state: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 10
    },
}, {
    timestamps: true
});

const Receiver = mongoose.model('Receiver', receiverSchema);

module.exports = Receiver;