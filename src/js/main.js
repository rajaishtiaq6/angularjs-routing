var mainApp = angular.module("mainApp", ['ngRoute']);
var baseUrl = 'https://angularjs.gc'; // Change this to your server URL
mainApp.config(function($routeProvider, $sceProvider) {
	$sceProvider.enabled(false);
	$routeProvider
		.when('/home', {
			templateUrl: baseUrl+'/home.html',
			controller: 'StudentController'
		})
		.when('/viewStudents', {
			templateUrl: baseUrl+'/viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('StudentController', function($scope) {
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.message = "Click on the hyper link to view the students list.";
});
