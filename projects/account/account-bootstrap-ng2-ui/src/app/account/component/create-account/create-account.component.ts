import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [AccountService]
})
export class CreateAccountComponent {
  account = new Account();

  constructor(
    private accountService: AccountService,
    private router: Router) { }

  onCreate() {
    console.log('TODO: Create');
    this.accountService.createAccount(this.account);
    this.router.navigate(['/account/view']);
  }
}
