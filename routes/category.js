const express = require('express');
const Category = require('../models/category');

const router = express.Router();

router.post('/post', async (req, res) => {
    const data = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        maxValue: req.body.maxValue,
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
        const data = await Category.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;