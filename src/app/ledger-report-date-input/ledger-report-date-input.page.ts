import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-ledger-report-date-input',
  templateUrl: './ledger-report-date-input.page.html',
  styleUrls: ['./ledger-report-date-input.page.scss'],
})
export class LedgerReportDateInputPage implements OnInit {

  constructor(private router: Router,private datePipe:DatePipe,) {
      }
   today ;
   choice:any;
   date2:any;
   date1:any;
   fromdate:any;
   todate:any;

  ngOnInit() {
    this.today = new Date(this.today.getTime() + (1000 * 60 * 60 * 24));
    
   this.today =  this.today .toISOString();
  }
  addItem(){

  }
  setChoice(sd){

  }
  scanBarcode(){

  }
  continue()
  {
   
    this.date1 = this.datePipe.transform(this.date1,'dd/MM/yyyy');
    this.date2 = this.datePipe.transform(this.date2,'dd/MM/yyyy');
  if(this.date1>this.date2)
  {
    this.fromdate = this.date1;
    this.todate = this.date2;
  }else{
    this.todate = this.date1;
    this.fromdate = this.date2;
  }
let data=
{
    todate:this.todate,
    fromdate:this.fromdate,
}
window.localStorage.setItem("ledgerreportdates",JSON.stringify(data));
this.router.navigate(['ledgerreport']);

  }
  
  close()
  {
    this.router.navigate(['home/inventory'])
  }

}
