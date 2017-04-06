import { Component, OnInit } from '@angular/core';
import { Animations }                          from './../../../common/directive/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [Animations.collapse]
})
export class HomeComponent implements OnInit {
  openOne : string;
  
  constructor() {
    this.openOne = 'show';
   }

  ngOnInit() {
  }

}
