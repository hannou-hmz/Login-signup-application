const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltCount = 8;


mongoose.connect('mongodb://127.0.0.1:27017/Clients')
.then(()=>{console.log(`Connected to db.`)})
.catch((e)=>{console.log(e.message)})

const userSchema = mongoose.Schema({

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
        required:true
    }
});

const User = mongoose.model('User' , userSchema);

async function createUser(name , email , ps){
    const hashedPasswd = await bcrypt.hash(ps , saltCount);
    try{
        const user = await User.create({
            username : name ,
            email : email,
            password: hashedPasswd
        });
    }
    catch(e){
        console.log(e.message);
        return;
    }    
}

async function userExist(name , ps){
    const user = await User.findOne({username : name});
    if(!user){
        console.log(`User does not exist`);
    }
    try{
        const validPasswd = await bcrypt.compare(ps , user.password);
        if(!validPasswd){
            console.log('Invalid username or password.');
             return;
        }

        console.log(`Valid password`);
        return user;
        
    }
    catch(e){
        console.log(e.message);
        return !validPasswd;
    }
    
}

module.exports = {
    createUser,
    userExist,
}