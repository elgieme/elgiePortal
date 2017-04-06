import { Injectable } from '@angular/core';
import { Account } from '../model/account';
import { ACCOUNTS } from './mock-accounts';
import { mockAccounts } from './mock-accounts';
import { Resource } from 'ng2-rest';

enum ENDPOINTS {
  API,
  OTHER_API
};

@Injectable()
export class AccountService {
  account: Account;
  accounts: Account[];
  
  constructor(private rest: Resource<ENDPOINTS, Account, Account[]>) {
    Resource.map(ENDPOINTS.API.toString(), 'http://localhost:8080/eventHostApi/rest');
    rest.add(ENDPOINTS.API, 'accounts');
    rest.add(ENDPOINTS.API, 'accounts/:action');
    rest.add(ENDPOINTS.API, 'accounts/:action/:accountId');
    //this.service = new SimpleResource<any, any>('http://localhost:8080/eventHostApi/rest', 'accounts/:action');
  }

  get model(){
    return {
        getAccounts : this.rest.api(ENDPOINTS.API, 'accounts').query(),
        createAccount : this.rest.api(ENDPOINTS.API, 'accounts/create').save(this.account)
    };
  }
  
  getAccount(accountId : number){
    return this.rest.api(ENDPOINTS.API, 'accounts/' + accountId).get();
  }
  
  login() : Promise<Account>{
    return null;
  }
    
  logOff() : void{
    
  }
  
  createAccount(account : Account) : void{
    //account.accountId = mockAccounts.getNextId();
    //ACCOUNTS.push(account);
    //this.service.model({action : 'create'}).save(account);
    this.account = account;
    this.model.createAccount.subscribe();
    console.log('Account Created'); 
  }
  
  getAccounts() : Promise<Account[]>{
    console.log('service: get accounts');
    
    //let accounts = this.service.model().get();
    
    return Promise.resolve(this.accounts);
  }
  
  updateAccount(account : Account) : void{
    
  }
  
  removeAccounts(accountIds : number[]) : Promise<boolean>{
    console.log('service: remove accounts');
    let index:number = 0;
    
    for(let account of ACCOUNTS){
      for(let accountId of accountIds){
        if(account.accountId == accountId){
          //ACCOUNTS.splice(index, 1);
          ACCOUNTS.pop();
        }
      }
      index++;
    }
    
    return Promise.resolve();
  }
}
