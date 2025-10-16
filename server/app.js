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
app.use(express.static("uploads"));


//подключение бд
// @ts-ignore
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true,
}).then(()=> console.log("Connected to the database!"))
.catch((err)=>console.log(err));

//rounter prefix
app.use("/api/post",require("./routes/routes"));

//start server

app.listen(port, ()=> console.log('server runnign at http://localhost:${port}'));
