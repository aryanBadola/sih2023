const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
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
    AibeNumber:{
        type:String,
        required:true,
        unique:true
    },
    Expertise:[{
        type:String
    }],
    City:{
        type:String,
        required:true
    },
    Description:[{
        type:String
    }],
    requestedId:[{
        client_id:{type:String},
        message:{type:String}
    }],
    acceptedId:[{
        client_id:{type:String},
        message:{type:String}
    }]
});

module.exports = mongoose.model("lawyer",lawyerSchema);