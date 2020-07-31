'use strict';

angular.module('myApp').controller('DispositivoController', DispositivoController);

function DispositivoController($scope, $filter, $window,$http, 
		$location, DispositivoService) {

	var self = this;

	var headers = {
		'Accept' : 'application/json'
	};
	
	// listas
	self.dispositivos = [];
	self.listaTiposYDom = [];
	self.sedes = [];
	self.oficinas = [];
	self.divisiones = [];
	self.estados = [];
	self.antivirus = [];
	self.procesadores = [];

	// variables
	self.currentPage = 0;
	self.pageSize = 10;
	
	self.busqueda ="";
	self.mensaje ="";
	self.estado = "";
	
	// Variables globales
	
	self.dataDispo = {};
	self.detalleDispo = {};
	self.datosRelacionados = {};
	self.datosAsignarIp = {};
	
	// Metodos
	self.initLoad = initLoad; 
	self.listaDispositivos = listaDispositivos;
	self.listarTiposAndDom = listarTiposAndDom;
	self.listaUbicaciones = listaUbicaciones;
	self.listarEstados = listarEstados;
	self.registrarDispositivo = registrarDispositivo; 
	self.numberOfPages = numberOfPages;
	self.getData = getData;
	self.limpiarVariables = limpiarVariables;
	self.abrirVentanaEditar = abrirVentanaEditar;
	self.abrirDetalleDispositivo = abrirDetalleDispositivo;
	self.verDetallesRelacionados = verDetallesRelacionados;
	self.abrirVentanaAsignarIp = abrirVentanaAsignarIp;
	self.listarAntivirus = listarAntivirus;
	self.listarProcesadores = listarProcesadores;
	
 	
	// inicializar metodos
	self.initLoad();
	
	function initLoad(){
		self.listaDispositivos();
		self.listarTiposAndDom();
		self.listaUbicaciones();
		self.listarEstados();
		self.listarAntivirus();
		self.listarProcesadores();
	}
	
	function listarTiposAndDom(){
		DispositivoService.listarTiposAndDominios(headers).then(
			function(response){ 			
				self.listaTiposYDom = response.listaTipoYDominio;
			}
		);
	}
	
	function listaDispositivos(){
		
		DispositivoService.listaDispositivos(headers).then(
			function(response){
				self.dispositivos = response.dispositivos;
			}
		);
		
	}
	
	function listaUbicaciones(){
		DispositivoService.listarUbicaciones(headers).then(
			function(response){ 
				self.sedes = response.sedes;
				self.oficinas = response.oficinas;
				self.divisiones = response.divisiones;
			}
		);
	}
	
	function listarEstados(){
		DispositivoService.listarEstados(headers).then(
			function(response){ 
				console.log(response);
				self.estados = response.estados;
			}
		);
	}
	
	function listarAntivirus(){
		DispositivoService.listarAntivirus(headers).then(
				function(response){ 
					self.antivirus = response.antivirus;
				}
			);
	}
	
	
	function listarProcesadores(){
		self.procesadores = [
			{
				idProcesador:1,
				procesador:"Core i7"
			},
			{
				idProcesador:2,
				procesador:"Core 2 Quad"
					
			},
			{
				idProcesador:3,
				procesador:"Core i5"
					
			},
			{
				idProcesador:4,
				procesador:"Core 2 Duo"
					
			},
			{
				idProcesador:5,
				procesador:"Intel - Core i9"
			}
		]		
	}
	
	function abrirVentanaEditar(data){ 
		
		self.dataDispo = {
			dispositivo :{
				idDispositivo: data.idDispositivo,
				estadoBean:{
					idEstado:data.estadoBean.idEstado,
					nomEstado:data.estadoBean.nomEstado
				},
				tipoDispositivoBean:{
					idTipodispositivo:data.tipoDispositivoBean.idTipodispositivo,
					nomDispositivo:data.tipoDispositivoBean.nomDispositivo
				},
				marca:data.marca,
				modelo:data.modelo,
				serie:data.serie,
				codBarras:data.codBarras,
				estadoBean:{
					idEstado:data.estadoBean.idEstado,
					nomEstado:data.estadoBean.nomEstado
				},
				ubicacionBean:{
					idUbicacion:data.ubicacionBean.idUbicacion,
					sedeBean:{
						idSede:data.ubicacionBean.sedeBean.idSede,
						nomSede:data.ubicacionBean.sedeBean.nomSede
					},
					divisionBean:{
						idDivision:data.ubicacionBean.divisionBean.idDivision,
						nomDivision:data.ubicacionBean.divisionBean.nomDivision
					},
					oficinaBean:{
						idOficina:data.ubicacionBean.oficinaBean.idOficina,
						nomOficina:data.ubicacionBean.oficinaBean.nomOficina,
					}
				},
				observacion:data.observacion,
				urlImagen:data.urlImagen
				
			}
		};
		
		$('#lbl_titulo_mant').text("Modificar Dispositivo");
		$("#Popup_modif2").modal({
			keyboard:true,
			show:true
		});
		
	}
	
	function abrirDetalleDispositivo(data){
		
		console.log(data);
		
		$('#lbl_titulo_detalleDispo').text("Detalle Dispositivo").css({
			"text-align":"center"
		});
		 
		$("#detalleDispositivo").modal({
			keyboard:true,
			show:true
		});
		
		self.detalleDispo = {
				dispositivo :{
					idDispositivo: data.idDispositivo,
					estadoBean:{
						idEstado:data.estadoBean.idEstado,
						nomEstado:data.estadoBean.nomEstado
					},
					tipoDispositivoBean:{
						idTipodispositivo:data.tipoDispositivoBean.idTipodispositivo,
						nomDispositivo:data.tipoDispositivoBean.nomDispositivo
					},
					marca:data.marca,
					modelo:data.modelo,
					serie:data.serie,
					codBarras:data.codBarras,
					estadoBean:{
						idEstado:data.estadoBean.idEstado,
						nomEstado:data.estadoBean.nomEstado
					},
					ubicacionBean:{
						idUbicacion:data.ubicacionBean.idUbicacion,
						sedeBean:{
							idSede:data.ubicacionBean.sedeBean.idSede,
							nomSede:data.ubicacionBean.sedeBean.nomSede
						},
						divisionBean:{
							idDivision:data.ubicacionBean.divisionBean.idDivision,
							nomDivision:data.ubicacionBean.divisionBean.nomDivision
						},
						oficinaBean:{
							idOficina:data.ubicacionBean.oficinaBean.idOficina,
							nomOficina:data.ubicacionBean.oficinaBean.nomOficina,
						}
					},
					observacion:data.observacion,
					urlImagen:data.urlImagen,
					dispositivoUsuarioBeans:data.dispositivoUsuarioBeans,
					cpu:{
						antivirus:data.cpuBean.antivirusBean,
						nomCpu:data.cpuBean.nomCpu,
						procesador:data.cpuBean.procesador
					},
					fecMod:data.fecMod
					
				}
			};
		
	}
	
	
	function abrirVentanaAsignarIp(data){
		
		console.log(data);
		
		self.datosAsignarIp = data;
		
		$("#Popup_redip").modal({
			keyboard:true,
			show:true
		});
		
	}
	
	function registrarDispositivo(){
		
		console.log(self.dataDispo);
		
		$('#lbl_titulo_confir').text("Confirmación");
		
		var ubicacion = {
			idSede:self.dataDispo.dispositivo.ubicacionBean.sedeBean.idSede,
			idDivision:self.dataDispo.dispositivo.ubicacionBean.divisionBean.idDivision,
			idOficina:self.dataDispo.dispositivo.ubicacionBean.oficinaBean.idOficina
		};
		
		console.log(ubicacion);
		
		if(self.dataDispo.dispositivo.idDispositivo != 0){
			console.log("diferente de 0");
			
			DispositivoService.generarIdDispositivo(headers,
					ubicacion,{}).then(
				
				function(response){
					 console.log(response);		
					 if(response.codigoRespuesta == '0'){
						 
							var dispositivo = {
									dispositivo :{
										idDispositivo:self.dataDispo.dispositivo.idDispositivo,
										estadoBean:{
											idEstado:self.dataDispo.dispositivo.estadoBean.idEstado,
											nomEstado:self.dataDispo.dispositivo.estadoBean.nomEstado
										},
										tipoDispositivoBean:{
											idTipodispositivo:self.dataDispo.dispositivo.tipoDispositivoBean.idTipodispositivo,
											nomDispositivo:self.dataDispo.dispositivo.tipoDispositivoBean.nomDispositivo
										},
										marca:self.dataDispo.dispositivo.marca,
										modelo:self.dataDispo.dispositivo.modelo,
										serie:self.dataDispo.dispositivo.serie,
										codBarras:self.dataDispo.dispositivo.codBarras,
										estadoBean:{
											idEstado:self.dataDispo.dispositivo.estadoBean.idEstado,
											nomEstado:self.dataDispo.dispositivo.estadoBean.nomEstado
										},
										ubicacionBean:{
											idUbicacion:response.codigoGenerado
										},
										
										observacion:self.dataDispo.dispositivo.observacion
									}
								};
							
							DispositivoService.actualizarDispositivo(headers,
									dispositivo,{}).then(
								function(response){
									console.log(response);
									
									self.mensaje = response.mensajeRespuesta;
									self.estado = response.codigoRespuesta;
									
									if(response.codigoRespuesta == '0'){
										$("#Popup_modif2").modal('hide');
									}
									
									$("#ventanaOk").modal({
										keyboard:true,
										show:true
									});
									
								}
							);
							
						 
					 }else{
						 self.mensaje = response.mensajeRespuesta;
						 self.estado = response.codigoRespuesta;
							
							$("#ventanaOk").modal({
								keyboard:true,
								show:true
							});
					 }
				}
							
			);
			
			
			
		}else{
			console.log("es 0");
			
			DispositivoService.generarIdDispositivo(headers,
					ubicacion,{}).then(
				 function(response){
					 console.log(response);		
					 if(response.codigoRespuesta == '0'){
						 
							var dispositivo = {
									dispositivo :{
										
										estadoBean:{
											idEstado:self.dataDispo.dispositivo.estadoBean.idEstado,
											nomEstado:self.dataDispo.dispositivo.estadoBean.nomEstado
										},
										tipoDispositivoBean:{
											idTipodispositivo:self.dataDispo.dispositivo.tipoDispositivoBean.idTipodispositivo,
											nomDispositivo:self.dataDispo.dispositivo.tipoDispositivoBean.nomDispositivo
										},
										marca:self.dataDispo.dispositivo.marca,
										modelo:self.dataDispo.dispositivo.modelo,
										serie:self.dataDispo.dispositivo.serie,
										codBarras:self.dataDispo.dispositivo.codBarras,
										estadoBean:{
											idEstado:self.dataDispo.dispositivo.estadoBean.idEstado,
											nomEstado:self.dataDispo.dispositivo.estadoBean.nomEstado
										},
										ubicacionBean:{
											idUbicacion:response.codigoGenerado
										},
										
										observacion:self.dataDispo.dispositivo.observacion
									}
								};
						 
							DispositivoService.registrarDispositivo(headers,
									dispositivo,{}).then(
								function(response){
									console.log(response);
									
									self.mensaje = response.mensajeRespuesta;
									self.estado = response.codigoRespuesta;
									
									if(response.codigoRespuesta == '0'){
										$("#Popup_modif2").modal('hide');
									}
									
									$("#ventanaOk").modal({
										keyboard:true,
										show:true
									});
								}
							);
							
					 }else{
						 
						 self.mensaje = response.mensajeRespuesta;
						 self.estado = response.codigoRespuesta;
							
							$("#ventanaOk").modal({
								keyboard:true,
								show:true
							});
					 } 
					 
					 
					 
				 }
			);
			
		}
		
		self.listaDispositivos();
		location.reload();

	}
	
	
	function verDetallesRelacionados(data){
		console.log(data);
		
		$('#lbl_titulo_datosRelacionados').text("Datos Relacionados");
		
		self.datosRelacionados = data;
		
		$("#datosRelacionados").modal({
			keyboard:true,
			show:true
		});
		
		
	}
	

	
	function numberOfPages(){
        return Math.ceil(self.getData().length/self.pageSize);                
    }
	
	function getData () {
		return $filter('filter')(self.dispositivos,self.busqueda)	
	}
	
	function limpiarVariables(){
		self.dataDispo = {
				dispositivo :{
					idDispositivo:0,
					estadoBean:{
						idEstado:0,
						nomEstado:""
					},
					tipoDispositivoBean:{
						idTipodispositivo:0,
						nomDispositivo:""
					},
					marca:"",
					modelo:"",
					serie:"",
					codBarras:"",
					estadoBean:{
						idEstado:0,
						nomEstado:""
					},
					ubicacionBean:{
						idUbicacion:0,
						sedeBean:{
							idSede:0,
							nomSede:""
						},
						divisionBean:{
							idDivision:0,
							nomDivision:""
						},
						oficinaBean:{
							idOficina:0,
							nomOficina:"",
						}
					},
					observacion:"",
					urlImagen:""
					
				}
			};
	}
	
	


}


myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
