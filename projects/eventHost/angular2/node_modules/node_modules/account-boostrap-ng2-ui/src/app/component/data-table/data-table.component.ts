import { Component, Input, forwardRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent  {
  @Input()
  public items: Array<any>;
  @Input()
  public columns: Array<any>;

}
