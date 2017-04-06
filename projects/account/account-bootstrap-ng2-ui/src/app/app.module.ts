import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountModule } from './account/account.module';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent} from './account/account.component';

@NgModule({
  imports: [
    AccountModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

