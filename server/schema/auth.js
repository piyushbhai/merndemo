const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const Auth = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    status:{
        type:Number,
        required:false,
        default:0
    },
    created_at:{
        type:Date,
        default: Date.now,
        required:false
    }
    
})


Auth.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

Auth.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({ _id: this._id }, "dgasdfd523453dfgdf");
        this.tokens = this.tokens.concat({ token: token });
        
        await this.save();
        // console.log(token); return;
        return token;
    } catch (error) {

    }
}

module.exports = Auth; 