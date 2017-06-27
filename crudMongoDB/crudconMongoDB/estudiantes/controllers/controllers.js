myApp.controller('estController', function($scope,$route,$routeParams,$http){
	$scope.getEstudiantes = function(){
		$http.get('/api/estudiantes/').then(function(response){
			$scope.estudiantes = response.data;
		});
	};
	$scope.showEstudiante = function(){
		var id = $routeParams.id;
		$http.get('/api/estudiantes/'+ id).then(function(response){
			$scope.estudiantes = response.data;
		});
	};
	$scope.addEstudiante = function(){
		$http.post('/api/estudiantes/', $scope.estudiante).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.updateEstudiante = function(){
		var id = $routeParams.id;
		$http.put('/api/estudiantes/'+ id , $scope.estudiantes).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.deleteEstudiante = function(id){
		var id = id;
		$http.delete('/api/estudiantes/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});