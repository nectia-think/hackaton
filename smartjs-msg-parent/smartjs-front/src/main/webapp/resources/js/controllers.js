app
	.controllers('personasListController', function ($scope, hackatonApiService) {
	
		$scope.personasList = [];
	
		hackatonApiService
			.personas
			.GET({
				'limit'		: 10,
				'sort-desc'	: 'rut'
			})
			.then(
				function (resp) {
					
					$scope.personasList = resp.data;

				},
				function (resp) {

					hackatonApiService.personas.data = '';

				}
			);
	
	});