const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hi");
})

app.listen(3000,function(){
    console.log("server listening on 3000...")
})