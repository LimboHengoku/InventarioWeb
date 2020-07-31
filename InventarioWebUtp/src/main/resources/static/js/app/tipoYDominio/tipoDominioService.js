'use strict';

angular.module('myApp').factory('TipoYDominioService', TipoYDominioService);

function TipoYDominioService($http, $q){
	
//	var URL_PRINCIPAL = 'http://192.168.1.11:8080/InventarioRest';
//	var URL_PRINCIPAL = 'http://localhost:8080';
	
	var URL_PRINCIPAL = 'https://inventariorest.herokuapp.com';
	
	var urlListaTipoYdominio = URL_PRINCIPAL + '/tipoYDominio/listar';
	var urlRegistrarTipoYdominio = URL_PRINCIPAL + '/tipoYDominio/registrar';
	var urlActualizarTipoYdominio = URL_PRINCIPAL + '/tipoYDominio/actualizar';
	var urlEliminarTipoYDominio = URL_PRINCIPAL + '/tipoYDominio/eliminar';
	
	var factory = {
		listarTiposAndDominios:listarTiposAndDominios,
		registrarTiposAndDominio:registrarTiposAndDominio,
		actualizarTipoAndDominio:actualizarTipoAndDominio,
		eliminarTipoAndDominio:eliminarTipoAndDominio
	};
	
	return factory;
	
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
	
	function registrarTiposAndDominio(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlRegistrarTipoYdominio,_data,{
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
	
	function actualizarTipoAndDominio(_headers,_data,_params){
		
		var deferred = $q.defer();
		
		$http.post(urlActualizarTipoYdominio,_data,{
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
	
	
	function eliminarTipoAndDominio(_headers,_data,_params){
		var deferred = $q.defer();
		
		
		$http.post(urlEliminarTipoYDominio,_data,{
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
	
}