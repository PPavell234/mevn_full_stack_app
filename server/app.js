// импорт
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.port // 5000

//middleeares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("upload"));


//подключение бд

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    

})

