const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    Aadhaar:{
        type:String,
        required:true,
        unique:true
    },
    City:{
        type:String,
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    },
    State:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("client",clientSchema);