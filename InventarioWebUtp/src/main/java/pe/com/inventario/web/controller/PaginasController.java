package pe.com.inventario.web.controller;

import java.net.InetAddress;

//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PaginasController {

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}

	@RequestMapping(value = "/inicio", method = RequestMethod.GET)
	public ModelAndView inicio() {

		ModelAndView model = new ModelAndView();

		model.setViewName("inicio");

		return model;
	}

	@RequestMapping(value = "/equipos/tipos", method = RequestMethod.GET)
	public ModelAndView tiposYequipos() throws Exception {

		InetAddress address = InetAddress.getLocalHost();
		String path = "";

		System.out.println(path);

		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());
		model.addObject("allMincss", path + "/css/Index/Template/all.min.css");
		model.addObject("sbadmin", path + "/css/Index/Template/sb-admin-2.min.css");
		model.addObject("indexStyleCss", path + "/css/Index/style_index.css");
		model.addObject("bootstrap", path + "/boostrap/css/bootstrap.min.css");
		model.addObject("disenioCategCss", path + "/css/Categorias/diseño_categ_1.css");
		model.addObject("imagenLogo", path + "/imagenes/logo_utp_3.png");
		model.addObject("jQuery341MinJs", path + "/jquery/jquery_3_4_1.min.js");
		model.addObject("sbadmin2", path + "/javaScript/Index/sb-admin-2.min.js");
		model.addObject("sbadmin2js", path + "/javaScript/Index/sb-admin-2.js");
		model.addObject("boostrapJs", path + "/boostrap/js/bootstrap.min.js");
		model.addObject("boostrapBundleJs", path + "/boostrap/js/bootstrap.bundle.min.js");
		model.addObject("categoriaJS", path + "/javaScript/Categorias/categorias_01.js");
		model.setViewName("equipos/tiposYdominios");

		return model;
	}

	@RequestMapping(value = "equipos/dispositivos", method = RequestMethod.GET)
	public ModelAndView dispositivos() {

		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());

		model.addObject("allmincss", "/css/Index/Template/all.min.css");
		model.addObject("sbadmin2css", "/css/Index/Template/sb-admin-2.min.css");
		model.addObject("stylexIndexCss", "/css/Index/style_index.css");
		model.addObject("bootstrapMinCss", "/boostrap/css/bootstrap.min.css");
		model.addObject("dispositivos01CSS", "/css/Dispositivos/dispositivos_01.css");
		model.addObject("jQuery341MinJS", "../jquery/jquery_3_4_1.min.js");
		model.addObject("sbAdmin2MinJs", "/javaScript/Index/sb-admin-2.min.js");
		model.addObject("sbadmin2JS", "../javaScript/Index/sb-admin-2.js");
		model.addObject("boostrapMinJs", "/boostrap/js/bootstrap.min.js");
		model.addObject("bootstrapBundelMinJs", "/boostrap/js/bootstrap.bundle.min.js");
		model.addObject("dispositivos01Js", "/javaScript/Dispositivos/dispositivos_01.js");
		model.setViewName("equipos/dispositivos");

		return model;
	}

	@RequestMapping(value = "software/proveedor", method = RequestMethod.GET)
	public ModelAndView proveedor() {

		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());

		model.setViewName("software/proveedores");
		return model;

	}

	@RequestMapping(value = "movimientos/usuario", method = RequestMethod.GET)
	public ModelAndView usuarios() {

		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());

		model.setViewName("usuario/usuarios");
		return model;

	}

	@RequestMapping(value = "movimientos/usuario/dispositivo={codigoUsuario}", method = RequestMethod.GET)
	public ModelAndView vincularDispositivo(@PathVariable("codigoUsuario") int codigoUsuario) {
		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());
		System.out.println("codigoUsuario : " + codigoUsuario);

		model.setViewName("movimientos/vincular_Dispositivo");
		return model;

	}
	
	
	@RequestMapping(value = "/equipos/antivirusYSo", method = RequestMethod.GET)
	public ModelAndView antivirusYSo() throws Exception {

		String path = "";

		System.out.println(path);

		ModelAndView model = new ModelAndView();
//		model.addObject("usuario", SecurityContextHolder.getContext().getAuthentication().getName());
		model.addObject("allMincss", path + "/css/Index/Template/all.min.css");
		model.addObject("sbadmin", path + "/css/Index/Template/sb-admin-2.min.css");
		model.addObject("indexStyleCss", path + "/css/Index/style_index.css");
		model.addObject("bootstrap", path + "/boostrap/css/bootstrap.min.css");
		model.addObject("disenioCategCss", path + "/css/Categorias/diseño_categ_1.css");
		model.addObject("imagenLogo", path + "/imagenes/logo_utp_3.png");
		model.addObject("jQuery341MinJs", path + "/jquery/jquery_3_4_1.min.js");
		model.addObject("sbadmin2", path + "/javaScript/Index/sb-admin-2.min.js");
		model.addObject("sbadmin2js", path + "/javaScript/Index/sb-admin-2.js");
		model.addObject("boostrapJs", path + "/boostrap/js/bootstrap.min.js");
		model.addObject("boostrapBundleJs", path + "/boostrap/js/bootstrap.bundle.min.js");
		model.addObject("categoriaJS", path + "/javaScript/Categorias/categorias_02.js");
		model.setViewName("equipos/antivirusYSo");

		return model;
	}
	
	

}
