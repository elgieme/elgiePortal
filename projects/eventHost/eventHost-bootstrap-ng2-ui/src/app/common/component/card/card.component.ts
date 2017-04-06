import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  host: {'class': 'card'}
})
export class CardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  footer: boolean;
  @Input()
  id: string;
  @Input()
  styleClass: string;
  
  constructor() { }

  ngOnInit() {
  }

}
