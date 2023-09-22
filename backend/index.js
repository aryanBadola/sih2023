const express = require('express');
const app = express();
const connectDb = require('./db/connect/mongoose');
const bodyParser = require('body-parser');

//connecting to db
connectDb();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/client',require('./routes/client.js'));
app.use('/api/lawyer',require('./routes/lawyer.js'));

app.listen(4000,()=>{
    console.log("Listening at port 4000");
});