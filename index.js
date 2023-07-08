require('dotenv').config();

const cors = require("cors");
const db = require("./app/models");
const express = require('express');

const userRoutes = require('./app/routes/user');
const authRoutes = require('./app/routes/auth');
const itemRoutes = require('./app/routes/item');
const categoryRoutes = require('./app/routes/category');
const objectiveRoutes = require('./app/routes/objective');

var corsOptions = {
    origin: "http://localhost:8081"
};

const app = express()

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/objetive', objectiveRoutes)

const router = express.Router()

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})

db.mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// const Role = db.role;
// const User = db.user
// const Item = db.item
// const Objetive = db.objetive
// const Category = db.category

// function initial() {
//     // User
//     // Item
//     // Objetive
//     // Category

//     Role.estimatedDocumentCount((err, count) => {
//         if (!err && count === 0) {
//             new Role({
//                 name: "user"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'user' to roles collection");
//             });

//             new Role({
//                 name: "moderator"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'moderator' to roles collection");
//             });

//             new Role({
//                 name: "admin"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'admin' to roles collection");
//             });
//         }
//     });
// }

module.exports = router;
