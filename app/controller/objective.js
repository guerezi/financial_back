const Objective = require("../models/objective")

create = async (req, res) => {
    const data = new Objective({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        initialData: req.body.initialData,
        finalData: req.body.finalData,
        maxValue: req.body.maxValue,
        minValue: req.body.minValue,
        category: req.body.category,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

getAll = async (req, res) => {
    try {
        const data = await Objective.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    create,
    getAll
}