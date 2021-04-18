const express = require('express');
const path = require('path');
 
const app = express();


app.use('/public', express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.sendFile('index.html',{root:path.join(__dirname,'views')});
});
app.listen('3000');
console.log('listen on port 3000');
