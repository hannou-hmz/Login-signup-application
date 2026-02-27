const express = require('express');
const fs = require('fs');
const app = express();
const {body , validationResult} = require('express-validator');
const path = require('path');
const filePath = 'C:\\Users\\USER\\Desktop\\node-login\\data\\data.json';

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON

app.get('/' , (req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , 'main.html'));
});

const validation = [
    body('password')
    .notEmpty()
    .withMessage('Password required.')
    .isLength({min : 8})
    .withMessage('Password too short')
];

const result = (req , res , next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){console.log(errors.array());return res.status(400).json({errors : errors.array()})}
    next();
}


app.get('/login' , (req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , 'login.html'));
});

app.post('/login' , (req , res)=>{
    const data = fs.readFileSync(filePath , 'utf-8');
    if(!data){
        console.log('No data');
        return res.redirect('/signup'); 
    }

    let body = req.body;
    let parsedData = JSON.parse(data);
    const finder = parsedData.find(u => u.username === body.username && u.password === body.password);
    if(finder){
        console.log(finder);
        return res.sendFile(path.join(__dirname , 'files' , 'homepage.html'));
    }
    else{
        return res.send(`<h1>No such user</h1>`);
    }
    
});

app.get('/signup' , (req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , 'signup.html'));
});

app.post('/signup' , validation , result , (req , res)=>{
    const data = fs.readFileSync(filePath , 'utf-8');
    const body = req.body;
    const newContent = [];
    if(!data){
        newContent.push(body);
        fs.writeFile(filePath , JSON.stringify(newContent) , 'utf-8' , (error)=>{
            if(error){
                return res.status(500).send('<h1>Internal issues</h1>')
            }
            return res.redirect('/');
        });
    }
    else{
        const newContent = JSON.parse(data);
        newContent.push(body);
        
        fs.writeFile(filePath , JSON.stringify(newContent) , 'utf-8' , (error)=>{
            if(error){
                return res.status(500).send('<h1>Internal issues</h1>')
            }
            return res.redirect('/');
        });
    }
});


app.use((req , res)=>{
    return res.sendFile(path.join(__dirname , 'files' , '404.html'));
});

const port = 4000;
app.listen(port , ()=>{console.log(`Server listening on port ${port}`);});