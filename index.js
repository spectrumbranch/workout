var Service = require('./lib');

var Path = Service.Path;
var Hapi = Service.Hapi;
var Inert = Service.Inert;

var masterConfig = require('./config/config');

var serverConfig = masterConfig.config;
        
if (serverConfig.tls) {
    console.log('Loading tls');
    options.tls = tlsConfig;
}

var server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'static')
			}
		}
	}
});
server.connection({ port: serverConfig.port, address: serverConfig.hostname });
server.register(Inert, () => {});

server.route(Service.Routes.get(Service));

server.start((err) => {
	if (err) throw err;

	console.log('Server up at ' + server.info.uri + ' !');
});