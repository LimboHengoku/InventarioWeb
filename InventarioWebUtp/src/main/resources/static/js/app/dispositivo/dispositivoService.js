'use strict';

angular.module('myApp').factory('DispositivoService', DispositivoService);

function DispositivoService($http, $q) {

//	var URL_PRINCIPAL = 'http://192.168.1.11:8080/InventarioRest';
//	var URL_PRINCIPAL = 'http://localhost:8080';
	
	var URL_PRINCIPAL = 'https://inventariorest.herokuapp.com';
	
	var urlListarDispositivo = URL_PRINCIPAL + "/dispositivo/listar";
	var urlListaTipoYdominio = URL_PRINCIPAL + '/tipoYDominio/listar';
	var urlListaUbicaciones = URL_PRINCIPAL + '/ubicacion/listar';
	var urlListarEstados = URL_PRINCIPAL + '/estado/listar';
	var urlRegistrarDispositivo = URL_PRINCIPAL + '/dispositivo/registrar';
	var urlGenerarIdUbicacion = URL_PRINCIPAL + '/ubicacion/generarId';
	var urlActualizarDispositivo = URL_PRINCIPAL + '/dispositivo/actualizar';
	var urlObtenerInfo = URL_PRINCIPAL + '/dispositivo/detalle';
	var urlListarAntivirus = URL_PRINCIPAL + '/antivirus/listar';
	var urlListarProcesadores = URL_PRINCIPAL + '/procesadores/listar';
	
	
	var factory = {
		listaDispositivos : listaDispositivos,
		listarTiposAndDominios:listarTiposAndDominios,
		listarUbicaciones:listarUbicaciones,
		listarEstados:listarEstados,
		registrarDispositivo:registrarDispositivo,
		generarIdDispositivo:generarIdDispositivo,
		actualizarDispositivo:actualizarDispositivo,
		obtenerInfoRelacional:obtenerInfoRelacional,
		listarAntivirus:listarAntivirus,
		listarProcesadores:listarProcesadores
	};

	return factory;

	function listaDispositivos(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListarDispositivo,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);	
		
		return deferred.promise;
	}
	
	function listarTiposAndDominios(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListaTipoYdominio,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);		
		
		return deferred.promise;
	}
	
	function listarUbicaciones(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListaUbicaciones,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);		
		
		return deferred.promise;
	}
	
	function listarEstados(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListarEstados,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);		
		
		return deferred.promise;
	}
	
	function registrarDispositivo(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlRegistrarDispositivo,_data,{
			headers:_headers,
			params:_params
		}).then(
			function(response){
				deferred.resolve(response.data);
			},
			function(error){
				console.log(error);
			}
		);
		
		return deferred.promise;
	}
	
	function actualizarDispositivo(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlActualizarDispositivo,_data,{
			headers:_headers,
			params:_params
		}).then(
			function(response){
				deferred.resolve(response.data);
			},
			function(error){
				console.log(error);
			}
		);
		
		return deferred.promise;
	}
	
	function generarIdDispositivo (_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlGenerarIdUbicacion,_data,{
			headers:_headers,
			params:_params
		}).then(
			function(response){
				deferred.resolve(response.data);
			},
			function(error){
				console.log(error);
			}
		);
		
		return deferred.promise;
	}
	
	function obtenerInfoRelacional(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlObtenerInfo,_data,{
			headers:_headers,
			params:_params
		}).then(
			function(response){
				deferred.resolve(response.data);
			},
			function(error){
				console.log(error);
			}
		);
		
		return deferred.promise;
		
	}

	
	function listarAntivirus(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListarAntivirus,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);	
		
		return deferred.promise;
	}
	
	function listarProcesadores(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListarProcesadores,{
			headers:_headers
		}).then(
		   function(response){
			   deferred.resolve(response.data);
		   },
		   function(error){
			   console.log(error);
		   }
		);	
		
		return deferred.promise;
	}
	
}
