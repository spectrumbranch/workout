var Service = {};
module.exports = Service;

Service.Path = require('path');

//3rd party modules
Service.Hapi = require('hapi');
Service.Inert = require('inert');

//local modules
Service.Routes = require('./routes');