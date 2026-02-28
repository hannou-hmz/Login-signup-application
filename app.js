const express = require('express');
const app = express();
const {createUser} = require('./db/signup-db');
const route = require('./routes/appRoutes');
const path = require('path');

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON
app.use(express.static(path.join(__dirname, 'mysite')));

app.use('/' , route);
app.use('/homepage' , route);
app.use('/signup' , route);
app.use('/login' , route);

app.use((req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , '404.html'));
});

const port = 4000;
app.listen(port , ()=>{console.log(`Server listening on port ${port}`);});