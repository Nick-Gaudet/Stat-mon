/* Creates node.js server*/

const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

var options = {
    origin: "http://localhost:8081"
};
app.use(cors(options));

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.json({ message: "Stat-mon Server" });
});
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});