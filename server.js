'use strict';

//Import index.js file from models directory
const Models = require('./lib/models/');

const Routes = require('./lib/routes');

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');



const server = new Hapi.Server();
server.connection({ port: Settings.port });

server.route(Routes);

// server.start((err) => {
//   Hoek.assert(!err, err);
//   console.log(`Server running at: ${server.info.uri}`);
// });
//Replacing above with:
Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});
// Above code will synchronize the models to our database and when that's done, start the server
