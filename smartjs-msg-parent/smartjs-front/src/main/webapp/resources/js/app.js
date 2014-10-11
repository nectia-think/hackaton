var app = angular.module('hackathonApp', [ 'ngRoute' ]);

app
	.config(function ( $routeProvider ) {
		
		'use strict';
		$routeProvider
			.when('/', {
				templateUrl : 'partials/personas-listado-tmpl.html',
				controller 	: 'personasListController'
			})
			.when('/persona/:id/edit', {
				templateUrl : 'partials/persona-edit-tmpl.html',
				controller 	: 'personaEditController'
			})
			.when('/persona/:id/view', {
				templateUrl : 'partials/personas-view-tmpl.html',
				controller 	: 'personaViewController'
			})
			.otherwise({
				redirectTo	: '/'
			});

	});