const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  all,
  create,
  read,
  update,
  delete: del,
} = require("./controllers/index.js");

// Get all shipments
router.get("/all", all);

router.post("/", create); //create a shipment

router
  .route("/:shipmentId")
  .get(read) //find a shipment
  .put(update) //update a shipment
  .delete(del); //delete a shipment

module.exports = router;
