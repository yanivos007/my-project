const express = require('express');
const router = require('express').Router();
const dbService = require('./dbService');

router.get('/', async (req, res) => {
    try {
        const users = await dbService.executeQuery('select * from users')
        res.json(users);
        res.send('hello from router')
    } catch (err) {
        alert(err)
    }
})
// router.post('/', (req, res) =>{

// })


module.exports = router;
