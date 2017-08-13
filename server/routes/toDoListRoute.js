var express = require('express');
var router = express.Router();
var pg = require('pg');
var pool = require('../modules/pool')

router.get('/', function getCallback(req, res) {
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM tasks;', function (queryError, result) {
                if (queryError) {
                    res.sendStatus(500);
                } else {
                    done();
                    console.log(result.rows);
                    res.send(result.rows);
                }
            })
        }
    })
});

router.post('/', function postCallback(req, res) {
    console.log('post route was hit');
    res.sendStatus(200);
});

module.exports = router;