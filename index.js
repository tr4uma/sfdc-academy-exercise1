const express = require('express')
var path = require('path');
var serveStatic = require('serve-static');
const cls = require('continuation-local-storage');
const Sequelize = require('sequelize');
//const database_url = 'postgres://cqxhzlyqirpzta:7fc911990843d7cfcd5e80bd43f3d2f2a5b027f2bfb5815bba4e6569e67c873f@ec2-54-247-100-44.eu-west-1.compute.amazonaws.com:5432/d7t4ipaploosk6';
const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});

const app = express()
const _ = require('lodash')

const Case = db.define('salesforce.case', {
  id : {type: Sequelize.STRING, unique: true, primaryKey: true}
},{
  freezeTableName: true,
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', (request, response) => {
  const queryString = request.query.searchtoken;

  let queryresult = Case.findAll()

  response.json({
    risultato: queryresult
  });
})

app.use(serveStatic(__dirname + '/dist'))

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
  next()
})

app.listen(process.env.PORT || 3000)

