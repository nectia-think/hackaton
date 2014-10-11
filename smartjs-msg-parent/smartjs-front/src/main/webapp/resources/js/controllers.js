app
	.controller('personasListController', function ($scope, $location, hackatonApiService) {
	
		$scope.personaLink = '';
		$scope.personasResp = {};
		$scope.personasList = [];
	
		hackatonApiService
			.personas
			.GET({
				'limit'		: 10,
				'sort-desc'	: 'rut'
			})
			.then(
				function (resp) {
					
					$scope.personasResp = resp;
					$scope.personasList = resp.data.list;

				},
				function (resp) {

					hackatonApiService.personas.data = '';

				}
			);
		
		$scope.personaAction = function(action) {
			
			$location.path($scope.personaLink+'/'+action);
			
		}
	
	});