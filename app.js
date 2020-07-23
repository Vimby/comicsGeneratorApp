//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    const superHeroName = req.body.Name;

    https.get("https://superheroapi.com/api/1950578145078820/search/ironMan", function(res){
        console.log('statusCode:', res.statusCode);

        res.on('results', (r) => {
           res.write(r);
          });
        
        }).on('error', (e) => {
          console.error(e);
        }); 
    
})

app.listen(3000, function(){
    console.log("server is running")
})




