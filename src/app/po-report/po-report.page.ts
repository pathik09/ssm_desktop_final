import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-po-report',
  templateUrl: './po-report.page.html',
  styleUrls: ['./po-report.page.scss'],
})
export class PoReportPage implements OnInit {
  purchaseorders: any;
  date1: any;
  date2: any;
  constructor(private router: Router,
    private callNumber: CallNumber) { }
  close() {
    this.router.navigate(['home/inventory']);
  }
  call(boi) {
    this.callNumber.callNumber(boi.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  selpo: any;
  choice;
  noitem = false;

  ngOnInit() {
    this.selpo = [];
    this.purchaseorders = [];
    this.purchaseorders = JSON.parse(window.localStorage.getItem("purchaseOrders"))
    let selecteditem_index = window.localStorage.getItem("selecteditem")
    for (let i = 0; i < this.purchaseorders.length; i++) {
      if (this.purchaseorders[i].item_index == selecteditem_index) {
        this.selpo.push(this.purchaseorders[i]);
      }
    }
    console.log(this.selpo.length);
    if(this.selpo.length==0)
    {
      console.log("NO item is true")
      this.noitem=true;
    }console.log(this.selpo);

  }
 

}
