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

const source = process.env.MONGO_URL;
mongoose.connect (source, {useNewUrlParser: true});

app.listen(3001, ()=>{
    console.log("Server started")
});
