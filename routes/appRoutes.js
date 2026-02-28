const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const router = express.Router();
const {createUser , userExist} = require('../db/signup-db');

router.get('/' , (req , res)=>{
    return res.sendFile(path.join(__dirname , '..' ,'files' , 'main.html'));
});

router.get('/homepage' , (req , res)=>{
    return res.sendFile(path.join(__dirname , '..' , 'mysite' , 'portfolioi2.html'));
});

router.get('/login' , (req , res)=>{
    return res.sendFile(path.join(__dirname , '..' , 'files' , 'login.html'));
});

router.post('/login' , async (req , res)=>{
    let body = req.body;
    const exist = await userExist(body.username , body.password);
    if(exist){
        return res.redirect('/homepage');
    }

    console.log(`User does not exist`);
    return res.status(404).send('<h1>User not found</h1>');
});

router.get('/signup' , (req , res)=>{
    return res.sendFile(path.join(__dirname , '..' , 'files' , 'signup.html'));
});

router.post('/signup' , (req , res)=>{
    let body = req.body;
    try{
        createUser(body.username , body.email , body.password);
        res.redirect('/login');
    }
    catch(e){
        console.log(e.message);
        res.status(400).send('<h1>Bad request</h1>');
    }
    
});

module.exports = router
