'use strict';

angular.module('myApp').controller('AntivirusYSoController',AntivirusYSoController);

function AntivirusYSoController($scope,$filter,$window,AntivirusYSoService){
	
	var self = this;
	
	var headers = {
	    'Accept': 'application/json'
	};
	
	// listas
	self.listar = [];
	
	// parametros
	self.dataAntiYSo = {};
	
	self.currentPage = 0;
	self.pageSize = 10;
	
	
	// metodos
	self.listarAntivirusYSo = listarAntivirusYSo;
	self.registrarAntivirusYSo = registrarAntivirusYSo;
	self.actualizarAntivirusYSo = actualizarAntivirusYSo;
	self.nuevoRegistro = nuevoRegistro;
	self.actualizarRegistro = actualizarRegistro;
	self.initLoad = initLoad;
	self.numberOfPages = numberOfPages;
	self.getData = getData;
	
	
	self.initLoad();
	
	function initLoad(){
		self.listarAntivirusYSo();
	}
	
	function listarAntivirusYSo(){
		AntivirusYSoService.listarAntivirusYSo(headers).then(
				function(response){
					console.log(response);
					self.listar = response.recursos;
				}
			);
	}
	
	function nuevoRegistro(){
		
		$("#Popup_guardar").modal({
			keyboard:true,
			show:true
		});
		
	}
	
	function registrarAntivirusYSo(){
		console.log(self.dataAntiYSo.flag);
		
		var data = {
			flag:self.dataAntiYSo.flag,
			recurso: {
				nombreRecurso:	self.dataAntiYSo.recurso.nombreRecurso,
				estado: 'A'
			}
		}
		
		console.log(data);
		
		AntivirusYSoService.registrarAntivirusYSo(headers,data,{}).then(
				function(response){
					
					console.log(response);
					
					alert(response.mensajeRespuesta)
					
					$("#Popup_guardar").modal('hide');
					
					listarAntivirusYSo();
				}
			);
		
	}
	
	function actualizarRegistro(data){
		console.log(data);
		
		self.dataAntiYSo = {
				flag:data.flag,
				recurso: {
					idRecurso:data.idRecurso,
					nombreRecurso:	data.nombreRecurso,
					estado: data.estado
				}
			}
		
		$("#Popup_modif").modal({
			keyboard:true,
			show:true
		});
	}
	
	function actualizarAntivirusYSo(){
		console.log(self.dataAntiYSo);
		
		AntivirusYSoService.actualizarAntivirusYSo(headers,self.dataAntiYSo
				,{}).then(
				function(response){
					
					console.log(response);
					
					alert(response.mensajeRespuesta)
					
					$("#Popup_modif").modal('hide');
					
					listarAntivirusYSo();
				}
			);
		
	}
	
	
	function numberOfPages(){
        return Math.ceil(self.getData().length/self.pageSize);                
    }
	
	function getData () {
		return $filter('filter')(self.listar)	
	}
	
}


myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
