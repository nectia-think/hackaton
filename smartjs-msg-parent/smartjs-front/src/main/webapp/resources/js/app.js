var app = angular.module('hackathonApp', [ 'ngRoute' ]);

app
	.config(function ( $routeProvider ) {
		
		'use strict';
		$routeProvider
			.when('/', {
				templateUrl : 'resources/partials/personas-listado-tmpl.html',
				controller 	: 'personasListController'
			})
			.when('/persona/:id/edit', {
				templateUrl : 'resources/partials/persona-edit-tmpl.html',
				controller 	: 'personaEditController'
			})
			.when('/persona/:id/view', {
				templateUrl : 'resources/partials/personas-view-tmpl.html',
				controller 	: 'personaViewController'
			})
			.otherwise({
				redirectTo	: '/'
			});

	});