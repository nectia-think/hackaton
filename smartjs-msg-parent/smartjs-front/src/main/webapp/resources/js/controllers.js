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
			if ( $scope.personaLink !== '' ) {
				$location.path($scope.personaLink+'/'+action);
			} else {
				alert( 'por favor seleccione un nombre' );
			}
			
		}
	
	})
	.controller('personaEditController', function ($scope, $routeParams, hackatonApiService) {
	
		$scope.message = 'edicion de usuario'+ $routeParams.id;
		
	
	})
	.controller('personaViewController', function ($scope, $routeParams, hackatonApiService) {
	
		$scope.message = 'visualizacion de usuario'+ $routeParams.id;
	
	})