'use strict';

angular.module('myApp').controller('TipoYDominioController',TipoYDominioController);

function TipoYDominioController($scope,$filter,$window,TipoYDominioService){
	
	var self = this;
	
	var headers = {
	    'Accept': 'application/json'
	};
	
	// listas
	self.listaTiposYDom = [];
	
	//parametros
	self.dataTipoDom = {
		descripcion:"",
		flag:""
	};
	
	self.regTipoDominio = {};
	
	self.currentPage = 0;
	self.pageSize = 10;
	self.q = '';
	
	// metodos
	self.listarTiposAndDom = listarTiposAndDom;
	self.initLoad = initLoad; 
	self.abrirDialogModif = abrirDialogModif;
	self.registrarTiposAndDominio = registrarTiposAndDominio;
	self.actualizarTiposAndDominio = actualizarTiposAndDominio;
	self.eliminarTipoAndDominio = eliminarTipoAndDominio;
	self.ventanaEliminarTipoAndDominio = ventanaEliminarTipoAndDominio;
	self.limpiar = limpiar;
	self.numberOfPages = numberOfPages;
	self.getData = getData;
	
	
	self.initLoad();
	
	function listarTiposAndDom(){
		TipoYDominioService.listarTiposAndDominios(headers).then(
			function(response){
				console.log(response);
				self.listaTiposYDom = response.listaTipoYDominio;
			}
		);
	}
	
	function initLoad(){
		self.listarTiposAndDom();
	}
	
	function registrarTiposAndDominio(){		
		console.log(self.regTipoDominio);
		
	TipoYDominioService.registrarTiposAndDominio(headers,
				self.regTipoDominio,{}).then(
		
			function(response){
				console.log(response);
				
				$("#Popup_guardar").modal('hide');
				
				alert(response.mensajeRespuesta)
				
				listarTiposAndDom();
			}
				
		);
	
		self.regTipoDominio = {};
	}
	
	function abrirDialogModif(data){
		console.log(data);
		console.log(data.flag);
	
		self.regTipoDominio = {
			flag:data.flag,
			tipoDominio:{
				idTipodispositivo:data.idTipodispositivo,
				nomDispositivo:data.nomDispositivo,
				estadoRegistro:data.estadoRegistro
			}
		};
		
		console.log(self.regTipoDominio);
		
		$("#Popup_modif").modal({
			keyboard:true,
			show:true
		});
	}
	
	function actualizarTiposAndDominio(){
		
		console.log(self.regTipoDominio);
		
		TipoYDominioService.actualizarTipoAndDominio(headers,
					self.regTipoDominio,{}).then(
			
				function(response){
					console.log(response);
					
					$("#Popup_modif").modal('hide');
					
					alert(response.mensajeRespuesta)
					
					listarTiposAndDom();
				}
					
			);
		
	}
	
	function ventanaEliminarTipoAndDominio(data){
		
		console.log(data);
		
		self.regTipoDominio = {
				flag:data.flag,
				tipoDominio:{
					idTipodispositivo:data.idTipodispositivo,
					nomDispositivo:data.nomDispositivo
				}
			};
		
		$("#ventanaEliminarRegTipo").modal({
			keyboard:true,
			show:true
		});
	}
	
	function eliminarTipoAndDominio(){
		
		console.log(self.regTipoDominio)
		
		TipoYDominioService.eliminarTipoAndDominio(headers,
				self.regTipoDominio,{}).then(
		
			function(response){
				console.log(response);
				
				$("#ventanaEliminarRegTipo").modal('hide');
				
				alert(response.mensajeRespuesta)
				
				listarTiposAndDom();
			}
				
		);
		
	}
	
	function limpiar(){
		self.regTipoDominio = {};
	}
	
	
	function numberOfPages(){
        return Math.ceil(self.getData().length/self.pageSize);                
    }
	
	function getData () {
		return $filter('filter')(self.listaTiposYDom)	
	}
	
}


myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
