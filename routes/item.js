const express = require('express');
const Item = require('../models/item');

const router = express.Router();

router.post('/post', async (req, res) => {
    const data = new Item({
        value: req.body.value,
        date: req.body.date,
        name: req.body.name,
        company: req.body.company,
        place: req.body.place,
        // place.lng: req.body.place.lng,
        objective: req.body.objective,
        category: req.body.category,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const data = await Item.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;