import { Account } from '../model/account';

export class MockAccounts{
  accountSeq : number = 1;
  
  getNextId() : number{
    return this.accountSeq++;
  }
}

export var ACCOUNTS: Account[] = new Array<Account>();
export var mockAccounts : MockAccounts = new MockAccounts();


for(let i:number = 0; i < 100; i++){
  let account:Account = new Account();
  account.accountId = mockAccounts.getNextId();
  account.username="Test" + i;
  ACCOUNTS.push(account);
}
