import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddSupplierPage } from '../add-supplier/add-supplier.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectpurchaseorder',
  templateUrl: './selectpurchaseorder.page.html',
  styleUrls: ['./selectpurchaseorder.page.scss'],
})
export class SelectpurchaseOrderPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public firestore: AngularFirestore,
    private router: Router,
  ) { }

  suppliers: any[];
  ModalPage: any;
  returnDat:any;
  user:any;
  selectedpurchaseorder:any;
  purchaseorder:any;
  close()
  {
    this.modalController.dismiss().then(() => {

    }).catch(() => {
      this.router.navigate(['home/inventory'])
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        if (event['data']) {
          this.returnDat = event['data'];
          setTimeout(()=>{
            this.selectSupplier(this.returnDat);
          },600)
        }
      });

    return await modal.present();
  }

  

  addSupplier(){
    this.ModalPage = AddSupplierPage;
    this.openModal();
  }

  selectSupplier(boi){
    this.modalController.dismiss(boi);
  }
  paid:any;
  noitem=false;
  getPurchaseOrders()
  {
    this.paid = window.localStorage.getItem('paid')
    var selecteditem = window.localStorage.getItem("selecteditem");
    console.log("selecteditem index"+selecteditem);
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
    let purchaseorder = new Array();
    let selectedPO = new Array();
    this.purchaseorder = new Array();
    let PO = new Array();
    purchaseorder =  JSON.parse(window.localStorage.getItem('purchaseorder')); 
      
    purchaseorder.forEach(function(value){
      //console.log("value.item_index"+value.item_index);
      
     
      if(value.item_index==selecteditem)
      {
        console.log("value.item_index"+value.item_index);
        selectedPO.push(value);
        
      }

    });
    console.log("selectedPO"+selectedPO);
    this.selectedpurchaseorder = selectedPO;
    console.log(this.selectedpurchaseorder.length)
    if(this.selectedpurchaseorder.length==0)
    {
      console.log("NO item is true")
      this.noitem=true;
    }
     /*
   let purchaseorder = new Array();
    this.selectedpurchaseorder = new Array();
    console.log("selecteditem index"+selecteditem);
    this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {
     


      if (res.purchaseorder) {

        if (res.purchaseorder < 1) {
  

        }
        else {
          let selectedPO = new Array();
         purchaseorder =JSON.parse(JSON.stringify(res.purchaseorder));
         console.log(purchaseorder)
         console.log("selecteditem index"+selecteditem);
         
        purchaseorder.forEach(function(value){
          console.log("value.item_index"+value.item_index);
          console.log("selecteditem index"+selecteditem)
         
         
          if(value.item_index==selecteditem)
          {
            console.log("value.item_index"+value.item_index);
            selectedPO.push(value);
            
          }

        });
        this.selectedpurchaseorder = selectedPO;

          


        }
      }

    })*/

  }

  ngOnInit() {
    this.getPurchaseOrders();
  }

}