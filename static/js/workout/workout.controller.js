(function() {
	'use strict';

	function WorkoutCtrl(NgTableParams) {
		var vm = this;


		vm.data = [
			{ exercise: 'dumbbell curl', weight: 25, sets: 3, reps: 8, comments: 'left arm weaker' },
			{ exercise: 'bench press', weight: 120, sets: 3, reps: 8, comments: 'terminated on last rep' },
			{ exercise: 'overhead extension', weight: 50, sets: 3, reps: 8, comments: 'favorite exercise' },
			{ exercise: 'leg curl', weight: 140, sets: 3, reps: 8, comments: '' },
			{ exercise: 'barbell row', weight: 80, sets: 3, reps: 8, comments: '' },
		];

		vm.tableParams = new NgTableParams({
			// initial sort order
			sorting: { name: "asc" }
		}, {
			data: vm.data 
		});
	};

	angular.module('workout')
		.controller('WorkoutCtrl', ['NgTableParams', WorkoutCtrl]);
})();