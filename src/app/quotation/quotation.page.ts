import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import {SocialSharing} from '@ionic-native/social-sharing/ngx'
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

import domtoimage from 'dom-to-image';



@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.page.html',
  styleUrls: ['./quotation.page.scss'],
})
export class QuotationPage implements OnInit {
  paid:any;
  closeModal()
  {
    this.router.navigate(['pos']); 
  }
  async downloadInvoice() {
      
    console.log("We are in the downloadInvoice");
    var node = document.getElementById('PrintInvoice');
 
domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        var doc = new jsPDF();
        doc.addImage(dataUrl,15, 30, 150, 100);
        doc.save("Quotation.pdf")
        //document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

   
  }


  constructor(private router:Router,private socialSharing :SocialSharing,public firestore: AngularFirestore,) { }
  user:any;
  basic:any;
 
items :any[];
supplier:any;
total = 0;
purchaseorders:any[]=new Array();
purchaseorder:any={};
date:any;
storeInfo:any;
business_name:any;
name:any;
address:any;
city:any;
zipcode:any;
gstin:any;
panno:any;
email:any;

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    var purchaseOrder :any={};
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    this.date =currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    this.storeInfo = JSON.parse(window.localStorage.getItem("storeInfo"))
    console.log(this.storeInfo);
    this.basic = window.localStorage.getItem('basic');
    if(this.user.uType == 1 || this.basic == 1)
    {
     this.business_name = this.storeInfo.bname;
     this.name = this.storeInfo.name;
     this.address = this.storeInfo.address;
     this.city = this.storeInfo.city;
     this.zipcode = this.storeInfo.zipcode;
     this.gstin = this.storeInfo.gstin;
     this.panno = this.storeInfo.panno;
     this.email = this.storeInfo.email;

    }
    else{
      this.business_name = "Smart Stock Management"
      this.address = "Smart Stock Management";
      this.city = "Smart Stock Management"
      this.zipcode = "Smart Stock Management"
      this.gstin = "Smart Stock Management"
      this.panno = this.storeInfo.panno;
      this.email = this.storeInfo.email;
    }
  
  this.items = JSON.parse( window.localStorage.getItem('po'))
  this.supplier = JSON.parse(window.localStorage.getItem('selectCustomer'));

  this.purchaseorders = this.items;
  this.total = 0;
  if(this.items.length == 0)
  {
    alert("Please select some items to add.")
    this.router.navigate(['pos']);       
  }
 
  for(let i = 0; i<this.items.length; i++)
  {
     if(this.items[i].rPrice <= 0)
     {
       alert("Please define the retail price for item "+this.items[i].name+" before proceeding.")
       this.router.navigate(['home/inventory']); 
       return;      
     }
    this.total = this.total + this.items[i].rPrice*this.items[i].quantity;
  }
   
  }

}
