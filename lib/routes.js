module.exports.get = function(Service) {

	return [
      
		//All static content
		{ method: 'GET', path: '/{path*}', handler: {
			directory: {
				path: '.',
				redirectToSlash: true,
				index: true
			}
		} }
	];
};