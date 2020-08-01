package pe.com.inventario.web.response;

import pe.com.inventario.web.bean.DispositivoBean;

public class DetalleDispositivoResponse extends GenericoResponse {

	private DispositivoBean dispositivo;

	public DispositivoBean getDispositivo() {
		return dispositivo;
	}

	public void setDispositivo(DispositivoBean dispositivo) {
		this.dispositivo = dispositivo;
	}

}
