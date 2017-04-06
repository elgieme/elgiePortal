package com.elgieportal.account.ui.spring.controller;

import java.io.Serializable;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.elgieportal.account.model.AccountVO;
import com.elgieportal.account.service.AccountRestServiceClient;

@Controller
@RequestMapping(value="/accounts")
public class AccountController implements Serializable {
	
	private AccountRestServiceClient service;
	
	@RequestMapping(value="/{accountId:.+}", method=RequestMethod.GET)
	public ModelAndView getAccount(@PathVariable("accountId") Long accountId){
		return new ModelAndView("account/logIn");
	}
	
	@RequestMapping(value="/logIn", method=RequestMethod.POST)
	public ModelAndView logIn(){
		return new ModelAndView("account/home");
	}
	
	@RequestMapping(value="/start", method = RequestMethod.GET)
	public ModelAndView starstAccount(){
		ModelAndView modelView = new ModelAndView("account/create");
		modelView.addObject("account", new AccountVO());
		return modelView;
	}
	
	@RequestMapping(value="/create", method = RequestMethod.POST)
	public ModelAndView createAccount(@ModelAttribute("account") AccountVO account){
		service = new AccountRestServiceClient();
		service.createAccount(account);
		
		return new ModelAndView("account/home");
	}
}
