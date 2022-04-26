module.exports = app => {
    const accounts = require("./controller.js");
    var router = require("express").Router();

    //Requests
    router.post("/", accounts.create);
    router.get("/", accounts.findUser);
    router.get("/:email/:password", accounts.findUser);  // passes email as param to findUser method


    app.use('/stat-mon-db/accounts', router);
};