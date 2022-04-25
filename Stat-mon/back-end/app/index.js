const db_config = require("./config.js");
const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = db_config.url;
db.accounts = require("./model.js")(mongoose);
module.exports = db;

