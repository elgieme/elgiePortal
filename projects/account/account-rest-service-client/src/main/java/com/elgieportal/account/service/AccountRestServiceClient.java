package com.elgieportal.account.service;

import java.io.Serializable;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;
import org.glassfish.jersey.client.ClientConfig;

import com.elgieportal.account.model.AccountVO;

public class AccountRestServiceClient implements Serializable{
	
	public void createAccount(AccountVO account){
		ClientConfig clientConfig = new ClientConfig();
		clientConfig.register(JacksonJsonProvider.class);
		//clientConfig.register(MyClientResponseFilter.class);
		//clientConfig.register(new AnotherClientFilter());
		 
		Client client = ClientBuilder.newClient(clientConfig);
		//client.register(ThirdClientFilter.class);
		
		WebTarget webTarget = client.target("http://localhost:8080/eventHostApi/rest");
		//webTarget.register(FilterForExampleCom.class);
		WebTarget resourceWebTarget = webTarget.path("accounts");
		WebTarget createWebTarget = resourceWebTarget.path("create");
		
		Invocation.Builder invocationBuilder =  createWebTarget.request(MediaType.APPLICATION_JSON);
		Response response = invocationBuilder.post(Entity.entity(account, MediaType.APPLICATION_JSON));
		
		System.out.println(response.getStatus());
		//System.out.println(response.readEntity(String.class));
	}
	
	public AccountVO getAccount(Long accountId){
		return null;
	}
}
