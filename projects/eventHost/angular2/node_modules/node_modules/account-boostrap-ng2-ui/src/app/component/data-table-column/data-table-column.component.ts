import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table-column',
  templateUrl: './data-table-column.component.html',
  styleUrls: ['./data-table-column.component.css']
})
export class DataTableColumnComponent implements OnInit {
  @Input('master') masterItem : any;
  @Input() value : string;
  
  constructor() { }

  ngOnInit() {
  }

}
