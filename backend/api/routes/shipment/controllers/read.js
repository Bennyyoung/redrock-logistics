const Shipment = require("../model.js");

module.exports = [
  function (req, res) {
    Shipment.findById(req.params.shipmentId, (err, doc) => {
      if (err) {
        return res.status(500).json({
          status: false,
          data: {
            message: "An error has occured. Failed to get shipment.",
            error: err,
          },
        });
      } else if (!doc) {
        return res.status(404).json({
          status: false,
          data: {
            message: "Shipment does not exist.",
          },
        });
      } else
        res.json({
          status: true,
          body: {
            message: "Shipment found!",
            shipment: doc,
          },
        });
    });
  },
];
