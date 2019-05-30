# Creación del ambiente del demo

## Base de Datos MongoDB

#### Iniciar contendor con la base de datos
```sh
$ docker run --name heroes-db -p 27017:27017 -d mongo
```


## API

#### Generación aplicación ExpressJS
```sh
$ express heroes-api
$ npm install
$ npm start
```

#### Agregar librería de mongodb
```sh
$ npm install mongodb --save
```

#### Creación endpoints `GET:getHeroes` y `POST:addHero`

**app.js** 
```javascript
//Agregar heroes API
var usersRouter = require('./routes/heroes');
app.use('/', usersRouter);
```

**routes/heroes.js**
```javascript
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
```