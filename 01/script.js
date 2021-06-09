var express = require('express')
var app = express()
var routes = require('./routes')


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/1',(req,res)=>{
    res.send('Hello World 1')
})

app.get('/1/about',routes.helloMe)

port=3000||process.env.port
app.listen(port,()=>{
    console.log('App started on port 3000')
})
