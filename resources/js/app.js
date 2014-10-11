var app = angular.module('hackathonApp', [ 'ngRoute' ]);

app
	.config(function ($routeProvider) {
		
		'use strict';
		$routeProvider
			.when('/', {
				templateUrl : '',
				controller : ''
			}).otherwise({
				redirectTo : '/'
			});

	});