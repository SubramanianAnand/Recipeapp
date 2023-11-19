const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const userRouter = require('./Routes/auth')
const cookieParser = require('cookie-parser')
const recipeRouter = require('./Routes/reciper')

const app = express()
dotenv.config();
const corsOptions = {
    origin:["http://localhost:5173"],
    methods: ["GET", "POST", "GET"],
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use('/auth', userRouter)
app.use('/recipe', recipeRouter)

const source = 'mongodb://SubramanianAnand:Guvi123@ac-ubpuzmz-shard-00-00.6xg0syx.mongodb.net:27017,ac-ubpuzmz-shard-00-01.6xg0syx.mongodb.net:27017,ac-ubpuzmz-shard-00-02.6xg0syx.mongodb.net:27017/?ssl=true&replicaSet=atlas-a223se-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect (source, {useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3001, ()=>{
    console.log("Server started")
});
