import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { InputTextComponent } from './../component/input-text/input-text.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { ViewAccountComponent } from './component/view-account/view-account.component';
import { ManageAccountsComponent } from './component/manage-accounts/manage-accounts.component';

const routes: Routes = [
  {
    path: 'account/login',
    component: LoginComponent
  },
  {
    path: 'account/create',
    component: CreateAccountComponent
  },
  {
    path: 'account/view',
    component: ViewAccountComponent
  },
  {
    path: 'account/manage',
    component: ManageAccountsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AccountRoutingModule {}