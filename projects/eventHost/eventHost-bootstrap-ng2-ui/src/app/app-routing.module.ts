import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RsvpComponent } from './eventHost/component/rsvp/rsvp.component';
import { HomeComponent } from './eventHost/component/home/home.component';
import { DetailsComponent } from './eventHost/component/details/details.component';
import { ActivityComponent } from './eventHost/component/activity/activity.component';
import { InputTextComponent } from './component/input-text/input-text.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'event/rsvp',
    component: RsvpComponent
  },
  {
    path: 'event/details',
    component: DetailsComponent
  },
  {
    path: 'event/activity',
    component: ActivityComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {}