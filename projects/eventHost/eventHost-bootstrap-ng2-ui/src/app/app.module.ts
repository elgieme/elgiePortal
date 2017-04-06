import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestModule } from 'ng2-rest';
//import { AccountModule } from 'account-boostrap-ng2-ui';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AppComponent } from './app.component';
import { RsvpComponent } from './eventHost/component/rsvp/rsvp.component';
import { AppRoutingModule }     from './app-routing.module';
import { InputTextComponent } from './component/input-text/input-text.component';
import { HomeComponent } from './eventHost/component/home/home.component';
import { DetailsComponent } from './eventHost/component/details/details.component';
import { ActivityComponent } from './eventHost/component/activity/activity.component';
import { CardComponent } from './common/component/card/card.component';
import { DataToggle } from './common/directive/datatoggle';
import { DataDismiss } from './common/directive/datadismiss';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    InputTextComponent,
    HomeComponent,
    DetailsComponent,
    ActivityComponent,
    CardComponent,
    DataToggle,
    DataDismiss
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2RestModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
