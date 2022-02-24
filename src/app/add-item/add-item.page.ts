import { Router } from '@angular/router';
 import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SelectSupplierPage } from '../select-supplier/select-supplier.page';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

interface item {
  name:String,
  rPrice:number,
  pPrice:number,
  stock:number
 }

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})


export class AddItemPage implements OnInit {

paid:any;  
  constructor(
    private barcodeScanner: BarcodeScanner,
    public modalController: ModalController,
    public toastController: ToastController,
    public firestore: AngularFirestore,
    private router: Router,
    
  ) { }

  ModalPage: any;
  items: any[];
  name: string;
  rPrice: number;
  pPrice: number;
    stock: number;
  supplier: any;
  choice: string = "manually";
  msg: string;
  color: string;
  SGST: number;
  IGST: number;
  CGST: number;
  HSN: string = "";
  uom: string;
  params: any;
  mquantity:number;
  lowstockalerts:any;
  gst:any;
  
  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        if (event['data']) {
          this.supplier = event['data'];
        }
      });

    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 2000,
      color: this.color,
    });
    toast.present();
  }

  setChoice(choice: string) {
    this.choice = choice;
  }

  user: any;
  itemsToBeUploaded: any;

  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }

    if (window.localStorage.getItem('itemsToBeUploaded')) {
      this.itemsToBeUploaded = JSON.parse(window.localStorage.getItem('itemsToBeUploaded'));
    } else {
      this.itemsToBeUploaded = [];
    }
  }

  barcode: string;

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode = barcodeData.text;
    


      this.choice = 'barcode';
    }).catch(err => {
      alert(err);
    });
  }

  openSuppliers() {
    this.ModalPage = SelectSupplierPage;
    this.openModal();
  }

  ionViewWillEnter() {
    this.paid = window.localStorage.getItem("paid");
  }

  close() {
    this.modalController.dismiss().then(() => {

    }).catch(() => {
      this.router.navigate(['home/dashboard'])
    })
  }
datas:any;
  addItem() {
    //this.items = JSON.parse(window.localStorage.getItem('items'));
    let same = false;
    
   
   
    if (!this.name || this.name.length == 0) {
      this.msg = "Invalid name!";
      this.color = "warning"
      this.presentToast();
    }  else {
      if (!this.SGST) {
        this.SGST = 0
      }
      if (!this.IGST) {
        this.IGST = 0
      }
      if (!this.CGST) {
        this.CGST = 0
      }
      if(!this.rPrice){
        this.rPrice = 0;
      }
      if(!this.pPrice){
        this.pPrice = 0;
      }
      if(!this.stock){
        this.stock = 0;
      }
      
      if (!this.barcode || this.barcode.length == 0)
      {
        this.barcode = " ";
        
      }
      
      if (!this.HSN || this.HSN.length == 0)
      {
        this.HSN = "";
      }
      if (!this.uom || this.uom.length == 0)
      {
        this.uom = "";
      }
      if (!this.mquantity)
      {
        this.mquantity = 10;
      }
      if(!this.gst)
      {
        this.gst = 0;
      }
      console.log(this.rPrice);
      console.log(this.pPrice);
   
      let data = {
        name: this.name,
        rPrice: this.rPrice,
        pPrice: this.pPrice,
        stock: this.stock,
        uom:this.uom,
        barcode: this.barcode,
        openingStock:this.stock,
        gst:this.gst,
      
       
        mquantity:this.mquantity
      }
      if(this.items == undefined)
      {
        this.items = new Array();
      }
    
      this.items.push(data);
      console.log(this.items);
      window.localStorage.setItem('items', JSON.stringify(this.items));
      console.log(this.user);
      if(this.user.uType == 1 || this.paid==1)
      {
       
      this.firestore.collection('stores').doc(this.user.docID).update({
        items: firebase.firestore.FieldValue.arrayUnion(data)
      })
    
      this.msg = "Item added!";
      this.color = "success"
      this.presentToast();
  }
      this.modalController.dismiss(data);
    }
  }

  ngOnInit() {

    this.getItems();
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user);
    if(this.user.uType == 1)
    {
      this.checkIfHelperExists();
    }
    
    
  
  }
  checkIfHelperExists()
 {
  var docRef = this.firestore.collection("helpers").doc(this.user.helperid);
  docRef.valueChanges().subscribe((
    ref
  )=>
  {
   if(ref == null)
   {
     window.localStorage.setItem("not allowed","true");
     this.router.navigate(['home/inventory']);
   }
  })

 }


}
