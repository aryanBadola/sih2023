const mongoose = require('mongoose');
const uri = "mongodb+srv://achintyamishra01:achintyamishra@cluster0.vyfh9od.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async()=>{
    mongoose.connect(uri,()=>{
        console.log("Connected to mongo");
    })
}

module.exports = connectDB;