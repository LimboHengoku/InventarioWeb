'use strict';

angular.module('myApp').factory('AntivirusYSoService', AntivirusYSoService);

function AntivirusYSoService($http, $q){
	
	
	var URL_PRINCIPAL = 'https://inventariorest.herokuapp.com';
	
	var urlListar = URL_PRINCIPAL + '/antivirusYSo/listar';
	var urlRegistrar = URL_PRINCIPAL + '/antivirusYSo/registrar';
	var urlActualizar = URL_PRINCIPAL + '/antivirusYSo/actualizar';
	
	
	var factory={
		
			listarAntivirusYSo:listarAntivirusYSo,
			registrarAntivirusYSo:registrarAntivirusYSo,
			actualizarAntivirusYSo:actualizarAntivirusYSo
		
	};
	
	return factory;
	
	
	function listarAntivirusYSo(_headers){
		
		var deferred = $q.defer();
		
		$http.get(urlListar,{
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
	
	function registrarAntivirusYSo(_headers,_data,_params){
		
		var deferred = $q.defer();
		
		$http.post(urlRegistrar,_data,{
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
	
	function actualizarAntivirusYSo(_headers,_data,_params){
		
		var deferred = $q.defer();
		
		$http.post(urlActualizar,_data,{
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

