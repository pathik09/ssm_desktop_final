import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilityMethodsService } from '../utility-methods.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  usertype:any;

  constructor(
    private router: Router,
    private platform: Platform,
    public firestore: AngularFirestore,
    public utility:UtilityMethodsService
    
  ) { }

  backDisbale = this.platform.backButton.subscribeWithPriority(999, () => {


    navigator['app'].exitApp();

  });

  gotoPage(pagename: string) {
    this.router.navigate([pagename])
  }
  paid:any;
  basic:any;
  items:any[];
  customers:any[];
  suppliers:any[];
  purchaseorders:any[]; 
  storeInfo:any;
  owner:any;
  ionViewWillEnter() {
 
    this.utility.checkPaid();
    this.utility.checkForBasicService();
    this.paid = 0;
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.usertype = this.user.uType;
    if(this.usertype == 1)
    {
      this.paid = 1;
      window.localStorage.setItem("paid",this.paid);
    }
    this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res: any) => {
        console.log("paid in firestore is"+res.paid)
    //    this.paid = res.paid;
      //  this.basic = res.basic;
        console.log("Here basic is "+this.basic);
       // window.localStorage.setItem("paid",this.paid);
        if(this.paid == 1)
        {
          this.basic = 1;
          this.items = res.items;
          this.customers = res.customers;
          this.suppliers = res.suppliers;
          this.purchaseorders = res.purchaseorder;
          this.storeInfo = res.storeInfo;
          this.helpers = res.helper;
          this.owner = res.owner;
          console.log("WE ARE HERE"+this.paid);
          console.log("HELPERS:"+this.helpers);
          if(this.helpers == undefined)
          {
             this.helpers = [];
          }
          if(this.items == undefined)
          {
            this.items = [];
          }
          if(this.suppliers == undefined)
          {
            this.suppliers = [];
          }
          if(this.customers == undefined)
          {
            this.customers = [];
          }
          if(this.purchaseorders == undefined)
          {
            this.purchaseorders = []
          }
          if(this.storeInfo == undefined)
          {
            this.storeInfo = [];
          }
  
  
  
      console.log("items is"+this.items);
      console.log("paid is"+this.paid);
      window.localStorage.setItem("paid",this.paid);
      window.localStorage.setItem('items',JSON.stringify(this.items))
      window.localStorage.setItem('items',JSON.stringify(this.items))
      window.localStorage.setItem('customers',JSON.stringify(this.customers))
      window.localStorage.setItem('suppliers',JSON.stringify(this.suppliers))
      window.localStorage.setItem('basic',this.basic);
      window.localStorage.setItem('purchaseOrders',JSON.stringify(this.purchaseorders))
      window.localStorage.setItem('storeInfo',JSON.stringify(this.storeInfo));
      window.localStorage.setItem('helpers',JSON.stringify(this.helpers));
      window.localStorage.setItem('owner',this.owner);
   
        }
        if(this.basic == undefined)
        {
          this.basic = 0;
        }
        if(this.paid == undefined)
        {
          this.paid = 0;
        }
console.log('BASIC'+this.basic);
 window.localStorage.setItem("paid","1");
 window.localStorage.setItem("basic","1"); 
  
     
    })
    console.log("paid is"+this.paid);
  //window.localStorage.setItem('basic',this.basic)
 
  }
  helpers: any[];


}
