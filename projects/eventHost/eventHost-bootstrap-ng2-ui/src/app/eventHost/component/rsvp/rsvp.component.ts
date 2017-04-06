import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { EventGuest } from '../../model/eventGuest';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  eventGuest = new EventGuest();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRsvp(){
    console.log('TODO: RSVP');
  }
}
