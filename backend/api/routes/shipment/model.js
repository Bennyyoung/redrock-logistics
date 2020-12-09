const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    sendersName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    sendersAddress: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    sendersPhone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    sendersEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },

    receiversName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    receiversAddress: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    receiversPhone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    receiversEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },

    origin: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    package: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    status: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    destination: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    carrier: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    typeOfShipment: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },

    weight: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    shipmentMode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    product: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    quantity: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    wayBill: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shipment", schema);
