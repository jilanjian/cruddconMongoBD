var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'estController'
		})
		.when('/estudiantes', {
			templateUrl:'templates/list.html',
			controller:'estController'
		})
		.when('/estudiantes/create', {
			templateUrl:'templates/add.html',
			controller:'estController'
		})
		.when('/estudiantes/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'estController'
		})
		.when('/estudiantes/:id/show', {
			templateUrl:'templates/show.html',
			controller:'estController'
		});
});
