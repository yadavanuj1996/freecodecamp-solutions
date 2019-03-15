
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
//app.get("/",(req,res)=>res.send("Hello Express"));

/** 3) Serve an HTML file */
app.get("/",(req,res)=>res.sendFile(`${__dirname}/views/index.html`));

/** 4) Serve static assets  */
app.use(express.static(__dirname+"/public"));

/** 5) serve JSON on a specific route */
//app.get('/json',(req,res)=>res.json({"message": "Hello json"}));

/** 6) Use the .env file to configure the app */
 app.get("/json",(req,res)=>{
   let resultMessage="Hello json";
   if (process.env.MESSAGE_STYLE==="uppercase"){
     resultMessage=resultMessage.toUpperCase();
   }
  
   res.json({"message": resultMessage});
                            
 });

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;

