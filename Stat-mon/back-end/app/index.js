const db_config = require("../mongodb_config.js");
const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = db_config.url;
db.tutorials = require("./mongoose_model.js")(mongoose);
module.exports = db;

const app = express();
app.use("...");
const db = require("./app");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });