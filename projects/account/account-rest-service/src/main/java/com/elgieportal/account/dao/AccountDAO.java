package com.elgieportal.account.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import org.apache.commons.beanutils.BeanUtils;

import com.elgieportal.account.model.AccountVO;

@ApplicationScoped
public class AccountDAO {
	//TODO move to database
	private Map<Long, AccountVO> accounts;
	private Long accountSeqId = 1L;
	
	@PostConstruct
	public void loadStubData(){
		accounts = new HashMap<Long, AccountVO>();
		
		AccountVO account = new AccountVO();
		account.setAccountId(accountSeqId++);
		account.setUsername("admin");
		account.setPassword("admin");
		account.setConfirmPassword("admin");
		account.setEmail("admin@test.com");
		account.setDateOfBirth(new Date());
		accounts.put(account.getAccountId(), account);
	}
	
	public AccountVO createAccount(AccountVO account){
		try{
			AccountVO newAccount = new AccountVO();
			Long accountId = accountSeqId++;
			BeanUtils.copyProperties(newAccount, account);
			newAccount.setAccountId(accountId);
			accounts.put(accountId, newAccount);	
			return newAccount;
		}catch(Exception e){
			throw new RuntimeException();
		}
	}
	
	public AccountVO getAccount(Long accountId){
		return accounts.get(accountId);
	}
	
	public List<AccountVO> getAccounts(){
		return new ArrayList<AccountVO>(accounts.values());
	}
}
