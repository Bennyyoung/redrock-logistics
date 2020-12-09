const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const expectedSchema = Joi.object({
  sendersName: Joi.string().required(),
  sendersAddress: Joi.string().required(),
  sendersPhone: Joi.number(),
  sendersEmail: Joi.string().email(),
  receiversName: Joi.string().required(),
  receiversAddress: Joi.string().required(),
  receiversPhone: Joi.number(),
  receiversEmail: Joi.string().email(),
  origin: Joi.string(),
  package: Joi.string(),
  status: Joi.string(),
  destination: Joi.string(),
  carrier: Joi.string(),
  typeOfShipment: Joi.string(),
  weight: Joi.number(),
  shipmentMode: Joi.string(),
  product: Joi.string(),
  quantity: Joi.number(),
  wayBill: Joi.string(),
});

const Shipment = require("../model.js");

module.exports = [
  validator.body(expectedSchema),
  function (req, res) {
    const newShipment = new Shipment({ ...req.body });
    newShipment
      .save()
      .then(() =>
        res.json({
          status: true,
          body: {
            message: "Shipment created successfully.",
          },
        })
      )
      .catch((err) => res.status(400).json("Error: " + err));
  },
];

// const {
//   sendersName,
//   sendersAddress,
//   sendersPhone,
//   sendersEmail,
//   receiversName,
//   receiversAddress,
//   receiversPhone,
//   receiversEmail,
//   origin,
//   package: packageAlt,
//   status,
//   destination,
//   carrier,
//   typeOfShipment,
//   weight,
//   shipmentMode,
//   product,
//   quantity,
//   wayBill,
// } = req.body;
