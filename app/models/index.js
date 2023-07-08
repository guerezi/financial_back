const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.item = require("./item");
db.objetive = require("./objective");
db.category = require("./category");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;