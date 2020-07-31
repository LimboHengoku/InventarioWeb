'use strict';

angular.module('myApp').controller('UsuarioController', UsuarioController);

function UsuarioController($scope, $filter, $window, $http, $location,
		UsuarioService) {

	var self = this;

	var headers = {
		'Accept' : 'application/json'
	};

	// Objetos
	self.dataUser = {};
	self.datosRel = {};

	// Listas
	self.usuarios = [];
	self.sedes = [];
	self.oficinas = [];
	self.divisiones = [];
	self.estados = [];

	// variables
	self.currentPage = 0;
	self.pageSize = 10;

	// Metodos
	self.initLoad = initLoad;
	self.listarUsuarios = listarUsuarios;
	self.listarEstados = listarEstados;
	self.numberOfPages = numberOfPages;
	self.getData = getData;
	self.abrirVentanaReg = abrirVentanaReg;
	self.abrirVentanaEditar = abrirVentanaEditar;
	self.verDispositivosVinculados = verDispositivosVinculados;
	self.listaUbicaciones = listaUbicaciones;
	self.registrarUsuario = registrarUsuario;
	self.actualizarUsuario = actualizarUsuario;
	self.limpiar = limpiar;
	self.verDetalleUsuario = verDetalleUsuario;

	// inicializar metodos
	self.initLoad();

	// Metodos

	function initLoad() {
		self.listarUsuarios();
		self.listaUbicaciones();
		self.limpiar();
	}

	function listarUsuarios() {
		UsuarioService.listarUsuarios(headers).then(function(response) {
			self.usuarios = response.usuarios;
		});
	}

	function listaUbicaciones() {
		UsuarioService.listarUbicaciones(headers).then(function(response) {
			self.sedes = response.sedes;
			self.oficinas = response.oficinas;
			self.divisiones = response.divisiones;
		});
	}

	function listarEstados() {
		UsuarioService.listarEstados(headers).then(function(response) {
			console.log(response);
			self.estados = response.estados;
		});
	}

	function numberOfPages() {
		return Math.ceil(self.getData().length / self.pageSize);
	}

	function getData() {
		return $filter('filter')(self.usuarios)
	}

	function abrirVentanaReg() {
		$('#lbl_titulo_mant').text("Registrar Usuario");
		$("#Popup_modif2").modal({
			keyboard : true,
			show : true
		});
		self.limpiar();
	}

	function abrirVentanaEditar(data) {
		console.log(data);

		self.dataUser = {
			usuario : {
				idUsuario : data.idUsuario,
				nombres : data.nombres,
				ape1 : data.ape1,
				ape2 : data.ape2,
				usuRed : data.usuRed
			},
			flag : 'A'
		};

		$('#lbl_titulo_edit').text("Editar Usuario");

		$("#Popup_edi2").modal({
			keyboard : true,
			show : true
		});
	}

	function registrarUsuario() {

		console.log(self.dataUser);

		var params = {
			usuario : {
				idUsuario : 0,
				nombres : self.dataUser.usuario.nombres,
				ape1 : self.dataUser.usuario.ape1,
				ape2 : self.dataUser.usuario.ape2,
				usuRed : self.dataUser.usuario.usuRed
			},
			flag : 'R'
		};
		
		var paramsUbi = {
				idSede:self.dataUser.usuario.usuarioUbicacion.sedeBean.idSede,
				idDivision:self.dataUser.usuario.usuarioUbicacion.divisionBean.idDivision,
				idOficina:self.dataUser.usuario.usuarioUbicacion.oficinaBean.idOficina
			};
		
		console.log(params);
		console.log(paramsUbi);
		
		

		UsuarioService.registrarUsuario(headers, params, {}).then(
			function(response) {
				
				console.log(response);
				
				if(response.codigoRespuesta == '0'){
					
					var paramsUbi = {
						idSede:self.dataUser.usuario.usuarioUbicacion.sedeBean.idSede,
						idDivision:self.dataUser.usuario.usuarioUbicacion.divisionBean.idDivision,
						idOficina:self.dataUser.usuario.usuarioUbicacion.oficinaBean.idOficina
					};
		
					UsuarioService.registrarUbi(headers,paramsUbi,{}).then(
						function(responseUbi){
							
							console.log(responseUbi);
							
							var paramsUsuUbi = {
									idCondicion:self.dataUser.usuario.usuarioUbicacion.condicionBean.idCondicion,
									idDominio:self.dataUser.usuario.usuarioUbicacion.dominioBean.idDominio,
									idUbicacion:responseUbi.codigoGenerado,
									idUsuario:response.codigoGenerado
							};
							
							if(responseUbi.codigoRespuesta == '0'){
								UsuarioService.registrarUsuarioUbi(headers,paramsUsuUbi,{}).then(
										function(responseUsuUbi){
											
											alert(responseUsuUbi.mensajeRespuesta);
											
											$("#Popup_modif2").modal('hide');
											
										}
									);
							}
							
						}
					);
					
				}
				
			}
		);
		
		self.listarUsuarios();
	}

	function actualizarUsuario() {
		console.log(self.dataUser)
		// UsuarioService.registrarUsuario(headers,self.dataUser,{}).then(
		// function(response){
		// console.log(response);
		// });

		// $("#Popup_edi2").modal('hide');
		// self.listarUsuarios();
	}

	function verDispositivosVinculados(data) {
		console.log(data);
		window.open('/movimientos/usuario/dispositivo/'+data.idUsuario, '_parent'); 
	}
	
	function verDetalleUsuario(data){
		console.log(data);
		
		self.datosRel = data;
		
		$('#lbl_titulo_detalleUsuario').text("Datos Relacionados");
		
		
		$("#detalleUsuario").modal({
			keyboard:true,
			show:true
		});
	}

	function limpiar() {
		self.dataUser = {};
	}

}

myApp.filter('startFrom', function() {
	return function(input, start) {
		start = +start; // parse to int
		return input.slice(start);
	}
});
