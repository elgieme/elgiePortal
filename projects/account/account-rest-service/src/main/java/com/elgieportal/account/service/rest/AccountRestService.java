package com.elgieportal.account.service.rest;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.ManagedBean;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.elgieportal.account.dao.AccountDAO;
import com.elgieportal.account.model.AccountVO;

@ManagedBean
@Path("accounts")
@Produces({ "application/javascript", MediaType.APPLICATION_JSON })
public class AccountRestService {

	@Inject
	private AccountDAO dao;
	
	@POST
	@Path("create")
	public AccountVO createAccount(AccountVO account) {
		return dao.createAccount(account);
	}

	@GET
	@Path("{accountId}")
	public AccountVO getAccount(@PathParam("accountId") Long accountId) {
		return dao.getAccount(accountId);
	}

	@GET
	public List<AccountVO> getAccounts() {
		return dao.getAccounts();
	}

	@POST
	@Path("delete/{accountId}")
	public void deleteAccount(@PathParam("accountId") Long accountId) {
		
	}

	@POST
	@Path("update")
	public AccountVO updateAccount(AccountVO account) {
		return new AccountVO();
	}

	@POST
	@Path("logIn")
	public AccountVO logIn(AccountVO account) {
		return new AccountVO();
	}

	@POST
	@Path("logOff")
	public void logOff(Long accountId) {

	}

}
