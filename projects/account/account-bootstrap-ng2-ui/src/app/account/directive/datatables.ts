import { Directive, OnInit, OnDestroy, ElementRef, AfterViewChecked } from '@angular/core';

declare var $: any

@Directive({
    selector: '.lg-data-table'
})
export class DataTables implements OnInit, OnDestroy, AfterViewChecked{
    constructor(private el: ElementRef) {
    }

    public ngOnInit() {
      
    }
  
    public ngAfterViewChecked() { 
      let isDataTable:boolean = $.fn.DataTable.isDataTable($(this.el.nativeElement));
      let isReady:boolean = $(this.el.nativeElement).find('tbody tr').length > 0;
      
      if(isReady && !isDataTable){ 
        console.log('test');
      
            let $buttons = $('.lg-table-buttons a');
            let buttons = [
                  {
                      extend: 'colvis',
                      columns: ':not(:first-child)'
                  },
                  'selectAll'
                ];
              
            /*$buttons.foreach(function(){
              buttons.push({
                text : $(this).text(),
                action : function(){
                  
                }
              });
            });*/
            
            $(this.el.nativeElement).DataTable({
              'dom' : '<"panel panel-default"'
                        + '<"panel-heading panel-title"><"row toolbar"<"col-sm-6" B><"col-sm-6 pull-right" l>><"panel-body" t><"row toolbar"<"col-sm-5" i><"col-sm-7" p>>>',
              columnDefs: [ {
                  orderable: false,
                  className: 'select-checkbox',
                  targets:   0
              } ],
              select: {
                  style:    'multi',
                  selector: 'td:first-child'
              },
              order: [[ 1, 'asc' ]],
              scrollCollapse : true,
              scrollY : '200px',
              stateSave : true,
              buttons : {
                dom : {
                    collections: {
                        tag: 'div'
                    }
                },
                 buttons : [{
                extend: 'collection',
                className : 'lg-option-menu',
                text : 'Options <span class="caret"></span>',
                autoClose : true,
                fade : 0,
                dom : {
                  buttons : {
                    tag : 'a'
                  }
                },
                buttons : buttons
              }]
              }
             
            });
      }
    }

    public ngOnDestroy() {
    }
}