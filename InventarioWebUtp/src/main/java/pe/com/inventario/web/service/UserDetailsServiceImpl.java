package pe.com.inventario.web.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import pe.com.inventario.web.bean.TipoLogueoBean;
import pe.com.inventario.web.request.LoginRequest;
import pe.com.inventario.web.response.LoginResponse;
import pe.com.inventario.web.util.Constantes;
//import pe.com.inventario.web.util.Properties;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
//	@Autowired
//	private Properties properties;

	@Override
	public UserDetails loadUserByUsername(String username) 
				throws UsernameNotFoundException {
		
		RestTemplate template = new RestTemplate();

		LoginRequest req = new LoginRequest();
		LoginResponse response = new LoginResponse();

		String url = "https://inventariorest.herokuapp.com/login";

		UserDetails user = null;

		try {

			req.setNombreUsuario(username);
			req.setClave("");

			UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(url);

			response = template.postForObject(builder.toUriString(), req, LoginResponse.class);

			if (response.getCodigoRespuesta().equals(Constantes.CODIGO_OK)) {

				List<GrantedAuthority> grantList = new ArrayList<>();

				TipoLogueoBean rol = response.getLogin().getTipoLogueoBean();

				GrantedAuthority grant = new SimpleGrantedAuthority(rol.getNomTipologueo());
				grantList.add(grant);

				String usuarioLogin = response.getLogin().getUsuarioBean().getNombres() + " " + response.getLogin().getUsuarioBean().getApe1() ;
				
				user = new User(usuarioLogin, response.getLogin().getPass(), grantList);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return user;
		
	}
	
	

}
