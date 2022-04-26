/* Creates node.js server*/

const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

var options = {
    origin: "http://10.0.0.173:8080" // CHANGE TO RESPECTIVE FRONT END NETWORK IF DIFFERENT
};
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Stat-mon Server" });
});
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
require("./app/routes.js")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});