const express = require("express");
const router = express.Router({ mergeParams: true });

const { shipment } = require("./routes/index.js");

router.use("/shipment", shipment.router);

module.exports = router;
