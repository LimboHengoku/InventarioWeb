package pe.com.inventario.web.response;

import pe.com.inventario.web.bean.LogueoBean;

public class LoginResponse extends GenericoResponse {

	private LogueoBean login;

	public LogueoBean getLogin() {
		return login;
	}

	public void setLogin(LogueoBean login) {
		this.login = login;
	}

}
