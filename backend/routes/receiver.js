const router = require('express').Router();
let Receiver = require('../models/users/receiver.model');

router.route('/').get((req, res) => {
    Receiver.find()
        .then(receiver => res.json(receiver))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const city = req.body.city;
    const state = req.body.state;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;

    const newReceiver = new Receiver({
        firstname,
        lastname,
        city,
        state,
        email,
        phonenumber,
    });

    newReceiver.save()
        .then(() => res.json('Receiver User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Receiver.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/:id').delete((req, res) => {
    Receiver.findByIdAndDelete(req.params.id)
    .then(() => res.json('Receiver deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Receiver.findById(req.params.id)
    .then(receiver => {
        receiver.firstname = req.body.firstname;
        receiver.lastname = req.body.lastname;
        receiver.city = req.body.city;
        receiver.state = req.body.state;
        receiver.email = req.body.email;
        receiver.phonenumber = req.body.phonenumber;

        receiver.save()
        .then(() => res.json('Receiver updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;