'use strict';

angular.module('myApp').factory('ProveedorService', ProveedorService);

function ProveedorService($http, $q){
	
//	var URL_PRINCIPAL = 'http://192.168.1.11:8080/InventarioRest';
//	var urlListaProveedor = URL_PRINCIPAL  + '/proveedor/listar';
//	var urlRegistrarProveedor = URL_PRINCIPAL + '/proveedor/registrar';
//	var urlActualizarProveedor = URL_PRINCIPAL + '/proveedor/actualizar';
	
//	var URL_PRINCIPAL = 'http://localhost:8080';
	var URL_PRINCIPAL = 'https://inventariorest.herokuapp.com';
	
	var urlListaProveedor = URL_PRINCIPAL  + '/proveedor/listar';
	var urlRegistrarProveedor = URL_PRINCIPAL + '/proveedor/registrar';
	var urlActualizarProveedor = URL_PRINCIPAL + '/proveedor/actualizar';
	
	var factory = {
		listarProveedor:listarProveedor,
		registrarProveedor:registrarProveedor,
		actualizarProveedor:actualizarProveedor
	};
	
	return factory;
	
	function listarProveedor(_headers){
		var deferred = $q.defer();
		
		$http.get(urlListaProveedor,{
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
	
	
	function registrarProveedor(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlRegistrarProveedor,_data,{
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
	
	function actualizarProveedor(_headers,_data,_params){
		var deferred = $q.defer();
		
		$http.post(urlActualizarProveedor,_data,{
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