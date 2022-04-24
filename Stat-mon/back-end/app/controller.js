import axios from 'axios';
const db = require("../models");
const Tutorial = db.tutorials;
// Create and Save a new Tutorial
exports.create = (req, res) => { // fill the database with standing data
    const options = {
        method: 'GET',
        url: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2022?key=0ca715232779441f9ecc1b5955dd2443", // this is my free trial key dont do anything evil
    };

    axios.request(options).then((response) => {
        for (var i = 0 ; i < response.data.length; i++){
            const standing = new Standing({
                team: response.data[i].Key,
                name: response.data[i].City + response.data[i].Name,
                conference: response.data[i].Conference,
                wins: response.data[i].Wins,
                losses: response.data[i].Losses,
                percentage: response.data[i].Percentage
            });

            standing
                .save(standing)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "ERROR"
                    });
                });
        }
    }).catch(function (error) {
        console.error(error);
    });
    
};