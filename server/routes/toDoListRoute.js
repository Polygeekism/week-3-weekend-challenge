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
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO tasks (task_description, task_complete) VALUES ($1, false);',[req.body.task], function (queryError, result) {
                if (queryError) {
                    res.sendStatus(500);
                } else {
                    done();
                    res.sendStatus(200);
                }
            })
        }
    })
});

router.delete('/:number', function postCallback(req, res) {
    var taskId = req.params.number;
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            res.sendStatus(500);
        } else {
            client.query('DELETE FROM tasks WHERE id = $1;',[taskId], function (queryError, result) {
                if (queryError) {
                    res.sendStatus(500);
                } else {
                    done();
                    res.sendStatus(200);
                }
            })
        }
    })
});

module.exports = router;