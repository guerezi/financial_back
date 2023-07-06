require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const categoryRoutes = require('./routes/category');
const objectiveRoutes = require('./routes/objective');

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express()

app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/objetive', objectiveRoutes)

const router = express.Router()

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

module.exports = router;
