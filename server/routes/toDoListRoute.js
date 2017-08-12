var express = require('express');
var router = express.Router();
var pg = require('pg');
var pool = require('../modules/pool')

router.get('/', function getCallback(req, res){
    console.log('get route was hit');
    res.sendStatus(200);
});

router.post('/', function postCallback(req, res){
    console.log('post route was hit');
    res.sendStatus(200);
});

module.exports = router;