import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestModule } from 'ng2-rest';

import { LoginComponent } from './component/login/login.component';
import { InputTextComponent } from './../component/input-text/input-text.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { ViewAccountComponent } from './component/view-account/view-account.component';
import { ManageAccountsComponent } from './component/manage-accounts/manage-accounts.component';
import { DataTables } from './directive/datatables';

import { AccountRoutingModule }     from './account-routing.module';
import { DataTableComponent } from './../component/data-table/data-table.component';
import { DataTableColumnComponent } from './../component/data-table-column/data-table-column.component';
import { AccountComponent} from './account.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AccountRoutingModule,
    HttpModule,
    Ng2RestModule
  ],
  declarations: [
    LoginComponent,
    InputTextComponent,
    CreateAccountComponent,
    ViewAccountComponent,
    ManageAccountsComponent,
    DataTables,
    DataTableComponent,
    DataTableColumnComponent
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule { }

