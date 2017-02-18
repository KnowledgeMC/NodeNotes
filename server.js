'use strict';

const Routes = require('./lib/routes');

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');



const server = new Hapi.Server();
server.connection({ port: Settings.port });

server.route(Routes);

server.start((err) => {
  Hoek.assert(!err, err);

  console.log('Server running at: ${server.info.uri}');
});

