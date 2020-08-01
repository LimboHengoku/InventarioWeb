package pe.com.inventario.web.request;

import pe.com.inventario.web.bean.UsuarioBean;

public class NuevoUsuarioRequest {

	private UsuarioBean usuario;
	private String flag;

	public UsuarioBean getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioBean usuario) {
		this.usuario = usuario;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

}
