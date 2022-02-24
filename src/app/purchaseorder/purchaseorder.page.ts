import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {SocialSharing} from '@ionic-native/social-sharing/ngx'
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';



@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.page.html',
  styleUrls: ['./purchaseorder.page.scss'],
})
export class PurchaseorderPage implements OnInit {
  paid:any;
  basic:any;
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
        doc.save("Purchase-Order.pdf")
        //document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

   
  }


  constructor(private router:Router,private socialSharing :SocialSharing,public firestore: AngularFirestore,) { }
  user:any;
  addPurchaseOrdertoFireBase(purchaseOrder,item)
{
  this.paid = window.localStorage.getItem('paid')
  this.basic = window.localStorage.getItem('basic')
  console.log("we are in the method");
  if (window.localStorage.getItem('user')) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  } else {
    this.user = [];
  }""
  var name = "purchaseorder";
  if(this.paid == 1)
  {

  this.firestore.collection('stores').doc(this.user.docID).update({
    [name]: firebase.firestore.FieldValue.arrayUnion(purchaseOrder)
  }).then(data => console.log(data)).catch((err) => {
    })

  }
  console.log(purchaseOrder);
  let purchaseorders = new Array();
 if( window.localStorage.getItem("purchaseorders"))
 {
   console.log(purchaseOrder);
   let purchaseorders = JSON.parse(window.localStorage.getItem("purchaseorder"))

    console.log(purchaseOrder);
   purchaseorders.push(purchaseOrder);
   console.log(purchaseorders);
   window.localStorage.setItem('purchaseorder',JSON.stringify(purchaseorders))
   
 }
 else{
  console.log(purchaseOrder);
   purchaseorders.push(purchaseOrder);
   window.localStorage.setItem('purchaseorder',JSON.stringify(purchaseorders))
 }
 
}
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
    this.basic = window.localStorage.getItem('basic')
    this.user = JSON.parse(window.localStorage.getItem('user'));
    var purchaseOrder :any={};
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

    this.date =currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    this.storeInfo = JSON.parse(window.localStorage.getItem("storeInfo"))
    console.log(this.storeInfo);
    console.log("BASIC******"+this.basic)
    if(this.user.uType == 1 || this.basic == 1)
    {
      console.log("WE SHOULD BE HERE*******");
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
   this.supplier = JSON.parse(window.localStorage.getItem('selectsupplier'));
   this.purchaseorders = this.items;
  this.total = 0;
  for(let i = 0; i<this.items.length; i++)
  {
    if(this.items[i].pPrice == 0)
      {
        alert("Please define the purchase price for item "+this.items[i].name+" before proceeding.")
        
      this.router.navigate(['home/inventory']); 
      return;
      }
      this.purchaseorder.stock = this.items[i].quantity;
    this.total = this.total + this.items[i].pPrice*this.items[i].quantity;
 }
 console.log(this.total);
    console.log(this.purchaseorders);
    this.sendMessageTOSupplier();
    console.log(this.purchaseorders);
  }
sendMessageTOSupplier()

{
 
  let itemString = ""; for(let i = 0; i<this.items.length; i++)
{
  itemString = itemString.concat("Item Name  "+this.items[i].name+"  Item Quantity  "+this.items[i].quantity +",");
  this.purchaseorder.item_name = this.items[i].name;
  this.purchaseorder.price = this.items[i].pPrice;
  this.purchaseorder.item_index = this.items[i].index;
  this.purchaseorder.supplier = this.supplier;
  console.log("we are calling the method");
  this.addPurchaseOrdertoFireBase(this.purchaseorder,this.items[i]);

 
  
  
  
}
console.log("ITEM STRING "+itemString);


this.socialSharing.shareViaWhatsAppToReceiver(this.supplier.phone,"Hi "+this.supplier.name+" ,PurchasseOrder has been generated at for your client, "+this.storeInfo.bname +"for, "+ itemString);
}
}
