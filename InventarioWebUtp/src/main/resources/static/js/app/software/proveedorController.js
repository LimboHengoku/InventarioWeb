'use strict';

angular.module('myApp').controller('ProveedorController', ProveedorController);

function ProveedorController($scope, $window, ProveedorService){

	var self = this;

	var headers = {
		'Accept' : 'application/json'
	};
	
	
	// listas
	self.arrayProveedor = [];
	
	
	// parametros
	self.dataProv = {
		proveedor : {
			idProveedor:0,
			nomProveedor:"",
			observacion:""
		}	
	}
	
	
	// Metodos
	self.initLoad = initLoad;
	self.listarProveedores = listarProveedores;
	self.registrarProveedor = registrarProveedor; 
	self.actualizarProveedor = actualizarProveedor; 
	self.limpiarCampos = limpiarCampos;
	self.abrirVentanaEditar = abrirVentanaEditar;
	
	// inicializar metodos
	self.initLoad();
	

	function initLoad(){
		self.listarProveedores();
	}
	
	function listarProveedores(){
		ProveedorService.listarProveedor(headers).then(
			function(response){
				console.log(response);
				self.arrayProveedor = response.proveedores;
			}
		);
	}
	
	function registrarProveedor(){
		console.log(self.dataProv);
		
		ProveedorService.registrarProveedor(headers,
				self.dataProv,{}).then(
			function(response){
				console.log(response);
				
				$("#Popup_mantprov").modal('hide');
				
				limpiarCampos();
				self.listarProveedores();
			}	
		);
		
	}
	
	function actualizarProveedor(){
		console.log(self.dataProv);
		
		ProveedorService.actualizarProveedor(headers,
				self.dataProv,{}).then(
			function(response){
				console.log(response);
				
				$("#Popup_editarprov").modal('hide');
				
				limpiarCampos();
				self.listarProveedores();
			}	
		);
	}
	
	
	function abrirVentanaEditar(data){
		console.log(data);
		
		self.dataProv = {
			proveedor : {
				idProveedor:data.idProveedor,
				nomProveedor:data.nomProveedor,
				observacion:data.observacion
			}	
		}
		
		$("#Popup_editarprov").modal({
			keyboard:true,
			show:true
		});
	}
	
	function limpiarCampos(){
		self.dataProv = {
			proveedor : {
				nomProveedor:"",
				observacion:""
			}	
		}
	}
	
}