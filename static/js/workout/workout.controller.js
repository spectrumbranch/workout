(function() {
	'use strict';

	function WorkoutCtrl() {
		var vm = this;
		vm.test = 'pass';
	};

	angular.module('workout')
		.controller('WorkoutCtrl', [WorkoutCtrl]);
})();