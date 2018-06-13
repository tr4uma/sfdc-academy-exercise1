const express = require('express')
var path = require('path');
var serveStatic = require('serve-static');
//const Sequelize = require('sequelize')
//const db = new Sequelize('postgres://mjcrhrgisgnlbw:45be8a9bfb4515b7a00594d2f0b3375655ccb7ef21716af95027cc1ff29b48cc@ec2-54-247-101-205.eu-west-1.compute.amazonaws.com:5432/d2su328to4h4hr')

const app = express()
const _ = require('lodash')

/*db
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
  CoinMarketData.sync({force: true})
  })
  .catch(err => {
  console.error('Unable to connect to the database:', err);
  });
*/
// app.get('/', (request, response) => {

//   response.json({
//     festa: 'TUTTO TOP'
//   })
// })

// app.use((err, request, response, next) => {
//   // log the error, for now just console.log
//   console.log(err)
//   response.status(500).send('Something broke!')
//   next()
// })

app.use(serveStatic(__dirname + '/dist'))
app.listen(process.env.PORT || 3000)