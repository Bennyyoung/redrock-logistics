const router = require('express').Router();
let CreateShipment = require('../models/users/createshipment.model');

router.route('/').get((req, res) => {
    CreateShipment.find()
        .then(createshipment => res.json(createshipment))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const sendersname = req.body.sendersname;
    const sendersaddress = req.body.sendersaddress;
    const sendersphone = req.body.sendersphone;
    const sendersemail = req.body.sendersemail;

    const receiversname = req.body.receiversname;
    const receiversaddress = req.body.receiversaddress;
    const receiversphone = req.body.receiversphone;
    const receiversemail = req.body.receiversemail;

    const origin = req.body.origin;
    const package = req.body.package;
    const status = req.body.status;
    const destination = req.body.destination;
    const carrier = req.body.carrier;
    const typeofshipment = req.body.typeofshipment;

    const weight = req.body.weight;
    const shipmentmode = req.body.shipmentmode;
    const product = req.body.product;
    const quantity = req.body.quantity;
    const waybill = req.body.waybill;

    const newCreateShipment = new CreateShipment({
        sendersname,
        sendersaddress,
        sendersphone,
        sendersemail,

        receiversname,
        receiversaddress,
        receiversphone,
        receiversemail,

        origin,
        package,
        status,
        destination,
        carrier,
        typeofshipment,

        weight,
        shipmentmode,
        product,
        quantity,
        waybill,
    });

    newCreateShipment.save()
        .then(() => res.json('Create Shipment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    CreateShipment.findById(req.params.id)
        .then(createshipment => res.json(createshipment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CreateShipment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Create shipment user deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//     Receiver.findById(req.params.id)
//         .then(receiver => {
//             receiver.firstname = req.body.firstname;
//             receiver.lastname = req.body.lastname;
//             receiver.city = req.body.city;
//             receiver.state = req.body.state;
//             receiver.email = req.body.email;
//             receiver.phonenumber = req.body.phonenumber;

//             receiver.save()
//                 .then(() => res.json('Receiver updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;