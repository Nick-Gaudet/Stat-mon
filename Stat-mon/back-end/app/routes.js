module.exports = app => {
    const accounts = require("./controller.js");
    var router = require("express").Router();
    router.post("/", accounts.create);
    
    app.use('/stat-mon-db/accounts', router);
};