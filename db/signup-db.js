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
        required:true,
        unique:true
    },

    password : {
        type:String,
        minlength : 8,
        maxlength : 50,
        required:true
    }
});

const User = mongoose.model('User' , userSchema);

let count = 1;
async function createUser(name , email , ps){
    
    try{
        const user = await User.create({
            ID : count,
            username : name ,
            email : email,
            password: ps
        });

        count++;
    }
    catch(e){
        console.log(e.message);
        return;
    }    
}

async function userExist(name , ps){
    try{
        const user = await User.findOne({
            username:name , 
            password:ps
        });
        return !!user;
    }
    catch(e){
        console.log(e.message);
        return false;
    }
}

module.exports = {
    createUser,
    userExist
}