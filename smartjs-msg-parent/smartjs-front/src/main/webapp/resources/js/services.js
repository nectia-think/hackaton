app
	.factory('hackatonApiService', function($http) {
		
		return {
			
			personas : {
				
				data : '',
				
				request : function (params) {
					
					var deferred = $q.defer();
  
					$http({
						url		: '/api/personas/',
						method	: 'GET',
						params	: params
					})
						.then(
							function (resp) {
								deferred.resolve(resp.data);
							},
							function (resp) {
								deferred.reject();
							}
						);

					return deferred.promise;
				},
				
				GET : function(params) {
					
					if (!this.data) {
						this.data = this.request(params);
					}

					return this.data;
					
				}
				
			}

			 
		};
		
	
	});