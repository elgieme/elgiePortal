import { Component} from '@angular/core';
import {NgForm}    from '@angular/forms';
import { Account } from '../../model/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new Account();
  
  constructor() { }

  doLogin() {
    console.log(this.loginForm.username);
  }

}
