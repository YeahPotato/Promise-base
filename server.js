const express = require('express');

let server = express();
server.listen(8888,(res)=>{
    console.log('Server is on port 8888,success;');
})


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    next();
});

server.post("/data",(req,res)=>{
    res.json({
        status:0,
        message:"success"
    })
})

// server.use(express.static('./doc'));

