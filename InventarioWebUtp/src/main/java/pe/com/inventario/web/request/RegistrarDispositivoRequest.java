package pe.com.inventario.web.request;

import pe.com.inventario.web.bean.DispositivoBean;

public class RegistrarDispositivoRequest {
	private DispositivoBean dispositivo;

	public DispositivoBean getDispositivo() {
		return dispositivo;
	}

	public void setDispositivo(DispositivoBean dispositivo) {
		this.dispositivo = dispositivo;
	}

}
