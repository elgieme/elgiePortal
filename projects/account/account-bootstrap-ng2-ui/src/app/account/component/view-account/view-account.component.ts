import { Component, OnInit } from '@angular/core';
import {NgForm}    from '@angular/forms';

import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css'],
  providers: [AccountService]
})
export class ViewAccountComponent implements OnInit {
  account: Account;
  
  constructor(private accountService: AccountService) {
    this.account = new Account();  
  }

  ngOnInit() { 
    console.log('init');
    this.accountService.getAccount(5).subscribe(data => {this.account = data});//.getAccount(1).then(account => this.account = account);
  }

}
