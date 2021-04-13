const express = require('express');
const hospital = require('../models/hospital');
const auth = require('../parsereqs/check-auth');

const router = express.Router();

//creating a new hospital
router.post('', auth, (req, res, next) => {
    const hospital = new Hospital({
        name: req.body.title,
        state: req.body.artist,
        district: req.body.header,
        fee: req.body.album,
        //year: req.body.year,
        zeroByte: req.body.zeroByte,
        rating: req.body.comment,
        desciption: req.body.track,
        type: req.body.genre
    });
    hospital.save().then(result => {
        res.status(201).json({
            message: 'Hospital added successfully.',
            hospitalId: result._id
        });
    });
});

// fetching all hotels in the database
router.get('', (req, res, next) => {
    Hospital.find().then(documents => {
        console.log(documents);
        res.status(200).json({
            message: 'Hospital fetched successfully!',
            hospital: documents
        });
    });
});

//deleting a single hotel, specified by its id
router.delete('/:id', auth, (req, res, next) => {
    Hospital.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Hospital successfully deleted.'
        });
    });
});

module.exports = router;