package pe.com.inventario.web.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.firewall.HttpFirewall;
//import org.springframework.security.web.firewall.StrictHttpFirewall;
//
//import pe.com.utp.inventario.bean.TipoLogueoBean;
//import pe.com.utp.inventario.response.ListaRolResponse;
//import pe.com.utp.inventario.web.service.UserDetailsServiceImpl;
//import pe.com.utp.inventario.web.service.UserServiceImpl;
//import pe.com.utp.inventario.web.util.Encriptador;

@Configuration
//@EnableWebSecurity
public class WebSecurityConfig  
//extends WebSecurityConfigurerAdapter
{
	
//	@Autowired
//	private UserServiceImpl userService;
	
//	@Autowired
//	private UserDetailsServiceImpl userDetailsService;
	
//	String[] resources = new String[] {
//		"/boostrap/**",
//		"/chart.js/**",
//		"/css/**",
//		"/fonts/**",
//		"/imagenes/**",
//		"/javaScript/**",
//		"/jquery/**",
//		"/jquery-easing/**",
//		"/js/**"
//	};
	
//	String[] roles = new String [] {
//		"Administrador",
//		"Soporte"
//	};
	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		
//		ListaRolResponse result = userService.listaRoles();
//		String roles = "";
//		
//		for(int i=0;i<result.getRoles().size();i++) {
//			TipoLogueoBean bean = result.getRoles().get(i);
//			roles = roles + bean.getNomTipologueo() + ",";
//		}
//		
//				
//		http
//		.authorizeRequests()
//		.antMatchers(resources).permitAll()
//		.antMatchers("inicio").hasAnyAuthority(roles)
//		.antMatchers("/equipos/tiposYdominios").hasAnyAuthority(roles)
//		.antMatchers("/equipos/dispositivos").hasAnyAuthority(roles)
//		.antMatchers("/software/proveedor").hasAnyAuthority(roles)
//		.antMatchers("/equipos/datosRelacionados").hasAnyAuthority(roles)
//		.antMatchers("/movimientos/usuario").hasAnyAuthority(roles)
//		.antMatchers("/movimientos/usuario/dispositivo/{codigoUsuario}").hasAnyAuthority(roles)
//		.anyRequest().authenticated()
//		.and()
//		.formLogin()
//		.loginPage("/login")
//		.permitAll()
//		.defaultSuccessUrl("/inicio")
//		.failureUrl("/login?error=true")
//		.usernameParameter("usuario")
//		.passwordParameter("clave")
//		.and()
//		.csrf().disable()
//		.logout()
//		.invalidateHttpSession(true)
//		.clearAuthentication(true)
//		.permitAll()
//		.logoutSuccessUrl("/login?logout");
//		
//	}
//
//	
//	public void configure(WebSecurity web) throws Exception {
//		 super.configure(web);
//		 web.httpFirewall(allowUrlEncodedSlashHttpFirewall());
//	}
//	
//	
//	public PasswordEncoder passwordEncoder() {
//
//		return new PasswordEncoder() {
//	        @Override
//	        public String encode(CharSequence charSequence) {
//	            return Encriptador.getMd5(charSequence.toString());
//	        }
//
//	        @Override
//	        public boolean matches(CharSequence charSequence, String s) {
//	            return Encriptador.getMd5(charSequence.toString()).equals(s);
//	        }
//	    };
//	
//	
//	}
//	
//	
//	
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
//		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//	}
//	
//	
//	@Bean
//	public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
//	    StrictHttpFirewall firewall = new StrictHttpFirewall();
//	    firewall.setAllowUrlEncodedSlash(true);    
//	    return firewall;
//	}
	
	

}
