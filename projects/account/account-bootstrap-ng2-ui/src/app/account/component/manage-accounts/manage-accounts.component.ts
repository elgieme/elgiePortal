import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import {NgForm}    from '@angular/forms';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';

declare var $:any;

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css'],
  providers: [AccountService]
})
export class ManageAccountsComponent implements OnInit, AfterViewInit, OnChanges {
  accounts: Account[];
  rendered: boolean;
  selectedAccounts : Map<number, number>;
  
  constructor(private accountService: AccountService) {
    //this.accounts = new Array<Account>();
    this.selectedAccounts = new Map<number, number>();
    this.accounts = new Array<Account>();
  }

  ngOnInit() {
    console.log('init');
    this.onLoad();
  }
  
  onLoad() : boolean{
    this.accountService.model.getAccounts.subscribe(data => {this.accounts = data});
    return true;
  }
  
 /* onLoadAccounts(accounts: Account[]) : Account[]{
    //this.accounts = accounts;
    this.rendered = true;
    return this.accounts;
  }*/
  
  addAccount(){
    console.log('NG-Add-Account');
  }
  
  removeAccounts(){
    console.log('remove accounts');
    this.accountService.removeAccounts(Array.from(this.selectedAccounts.values())).then(result => this.onLoad());
    $('.lg-data-table').DataTable().rows('.selected').remove().draw();
    return true;
  }
  
  selectAccount(accountId : number) : void{
    console.log(accountId); 
    
    if(this.selectedAccounts.has(accountId)){
      this.selectedAccounts.delete(accountId);
    }
    else{
      this.selectedAccounts.set(accountId, accountId);
    }
  }

  ngAfterViewInit () {
    let $table:any = $('.lg-data-table');
    let isDataTable:boolean = $.fn.DataTable.isDataTable($table);
    
    if(this.rendered && !isDataTable){


      //var lastButton = $('.lg-data-table').DataTable().button('.lg-last-button').node().clone();
      //$(lastButton).find('a').replaceWith($('.lg-table-buttons a'));
      //$(lastButton).removeClass('hidden');
      //$(lastButton).insertAfter($('.lg-data-table').DataTable().button('.lg-last-button').node());
    }
  }
  
  ngOnChanges(){
    $('.lg-data-table').DataTable().columns.adjust().draw();
  }
}
