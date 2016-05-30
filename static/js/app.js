angular.module('app', ['ngTable', 'app.modules'
        ])
	//.config(['$urlRouterProvider',
	//         function($urlRouterProvider) {
	//	//Set default route
	//	$urlRouterProvider.otherwise('/');
	//}])
	.run(function(ngTableDefaults) {
		ngTableDefaults.params.count = 5;
    	ngTableDefaults.settings.counts = [];
	})
;

angular.module('app.modules', [
	'workout'
]);