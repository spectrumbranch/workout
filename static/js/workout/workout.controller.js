(function() {
	'use strict';

	function WorkoutCtrl(NgTableParams) {
		var vm = this;


		vm.data = [
			{ id: 1, exercise: 'dumbbell curl', weight: 25, sets: 3, reps: 8, comments: 'left arm weaker' },
			{ id: 2, exercise: 'bench press', weight: 120, sets: 3, reps: 8, comments: 'terminated on last rep' },
			{ id: 3, exercise: 'overhead extension', weight: 50, sets: 3, reps: 8, comments: 'favorite exercise' },
			{ id: 4, exercise: 'leg curl', weight: 140, sets: 3, reps: 8, comments: '' },
			{ id: 5, exercise: 'barbell row', weight: 80, sets: 3, reps: 8, comments: '' },
		];

		vm.tableParams = new NgTableParams({
			// initial sort order
			sorting: { name: "asc" }
		}, {
			data: vm.data 
		});

		vm.editExercise = function(id) {
			console.log('TODO edit exercise: ', id);
		}
		vm.deleteExercise = function(id) {
			console.log('TODO delete exercise: ', id);
		}
	};

	angular.module('workout')
		.controller('WorkoutCtrl', ['NgTableParams', WorkoutCtrl]);
})();