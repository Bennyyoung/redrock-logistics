const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const createshipmentSchema = new Schema({
    sendersname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    sendersaddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    sendersphone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    sendersemail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },

    receiversname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    receiversaddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    receiversphone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    receiversemail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },

    origin: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    package: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    status: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    destination: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    carrier: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    typeofshipment: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },

    weight: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    shipmentmode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    product: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    quantity: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    waybill: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
}, {
    timestamps: true
});

const createShipment = mongoose.model('CreateShipment', createshipmentSchema);

module.exports = createShipment;