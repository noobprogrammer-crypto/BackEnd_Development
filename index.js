// console.log("Starting backend");
// // we will learn express nicely 
// // it is a web framework

require('dotenv').config()

// this is a basic server we can use to handle request and response 
const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Hello World!')
});

app.get('/twitter',(req,res)=>{
    res.send('Twitter entered!');
});


app.get('/facebook',(req,res)=>{
    res.send(`<h1>please login at geekchakra</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
});

app.get('/geekChakra',(req,res)=>{
    res.send(`GeekChakra is back ${'bitch'}`);
});

