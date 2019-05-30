var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'heroes';

router.get('/getHeroes', (req, res) => {
  MongoClient.connect(url, function(err, client) {
      
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);

    db.collection('heroes').find({}).toArray((err,result)=>{
      if(err){
        res.status(5000).send("Error getting heroes!")
      } else {
        console.log(result)
        res.status(200).send(result);
      }
      client.close();
    })
  
  });
});

router.post('/addHero', (req, res) => {
  console.log(req.body)
  MongoClient.connect(url, function(err, client) {
    
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);

    db.collection('heroes').insert(req.body, (err,result)=>{
      if(err){
        res.status(5000).send("Error adding hero!")
      } else {
        res.status(200).send(result);
      }
      client.close();
    })
   
  });
});

module.exports = router;
