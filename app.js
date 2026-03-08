const express = require('express');
const app = express();
const {createUser} = require('./db/signup-db');
const route = require('./routes/appRoutes');
const {MongoStore} = require('connect-mongo');
const session = require('express-session');
const path = require('path');

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON
app.use(session({
    secret : "mySecret",
    resave : false,
    saveUninitialized : false , 
    store: MongoStore.create({
        mongoUrl : "mongodb://127.0.0.1:27017/originalSessions"
    }),
    cookie: {
        secure: false, // data is send through http , if true only send over https
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use('/' , route);
app.use('/homepage' , route);
app.use('/signup' , route);
app.use('/login' , route);
app.use('/logout' , route);

app.use((req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , '404.html'));
});

const port = 4000;
app.listen(port , ()=>{console.log(`Server listening on port ${port}`);});