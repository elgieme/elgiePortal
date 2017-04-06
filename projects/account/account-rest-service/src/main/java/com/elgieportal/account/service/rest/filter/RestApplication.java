package com.elgieportal.account.service.rest.filter;

import org.glassfish.jersey.server.ResourceConfig;

public class RestApplication extends ResourceConfig {
	public RestApplication(){
		register(CORSResponseFilter.class);
	}
}
