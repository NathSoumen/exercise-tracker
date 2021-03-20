const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOOSE_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true ,useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open' ,() => {
    console.log(`MongoDB database conection established succsessfully`);
});

app.listen(port, ()=> {
    console.log(`Server is runninng at port : ${port }`);
})