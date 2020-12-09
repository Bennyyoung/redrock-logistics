const router = require('express').Router();
let Sender = require('../models/users/sender.model');

router.route('/').get((req, res) => {
    Sender.find()
        .then(senders => res.json(senders))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const city = req.body.city;
    const state = req.body.state;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const personorcargo = req.body.personorcargo;

    const newSenderUser = new Sender({ firstname, lastname, city, state, email, phonenumber, personorcargo });

    newSenderUser.save()
        .then(() => res.json('Sender User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;