// import axios from 'axios';
const db = require("./");
const Account = db.accounts;
// Create and Save a new user
exports.create = (req, res) => { // fill the database with user data

    const account = new Account({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });

    account
        .save(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ERROR"
            });
        });
    
};