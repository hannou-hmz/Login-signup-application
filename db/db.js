const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Customers')
.then(()=>{console.log(`Connected to db.`)})
.catch((e)=>{console.log(e.message)})

const userSchema = mongoose.Schema({
    ID : {
        type:Number,
        required:true,
        unique:true
    },

    username : {
        type: String,
        required:true
    },

    email : {
        type:String,
        required:true
    },

    password : {
        type:String,
        minlength : 8,
        maxlength : 50,
        required
    }
});

const User = mongoose.model('User' , userSchema);

let body = req.body;

async function createUser(name , email , ps){
    let id = 0;
    try{
        const user = await User.create({
            ID : id++,
            username : name ,
            email : email,
            password: ps
        });

    }
    catch(e){
        console.log(e.message);
    }    
}

module.exports = {
    createUser
}