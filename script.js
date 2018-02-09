(function () {
	angular
	 .module('app', [])
	 .controller('AlumnosController', AlumnosController);

	Controller.$inject = ['$scope'];

	function AlumnosController($scope){
	$scope.alumnos=[
		{nombre:"Felix Bartolome", telefono: "9232582528", curso:"Primero ESO"},
		{nombre:"Juan Perez", telefono: "9232582526", curso:"Segundo ESO"},
		{nombre:"Maria Lopez", telefono: "9232582527", curso:"Tercero ESO"},
		{nombre:"Ana Torres", telefono: "9232582529", curso:"Segundo ESO"}
		];

	//para que funcione scope hay que meterlo dentro de la funcion 
	$scope.Save=function(){

		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
	}

		}


})();