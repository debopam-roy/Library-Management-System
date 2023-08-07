const express = require('express');
const dotenv=require('dotenv');
const app = express();
const util_env=dotenv.config();
const listening_port=process.env.PORT||8000;
app.get('/',(req,res)=>{
    res.json("Hello World!");
});
app.listen(listening_port,()=>{
    console.log(`Server is listening on port ${listening_port}.`)
});