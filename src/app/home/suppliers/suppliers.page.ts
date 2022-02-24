import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Addsupplier1Page } from '../../addsupplier1/addsupplier1.page'
import { AlertController } from '@ionic/angular';
import { UtilityMethodsService } from 'src/app/utility-methods.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  constructor(
private utility:UtilityMethodsService,
    private router: Router,
    private callNumber: CallNumber,
    private firestore : AngularFirestore,
    public modalController: ModalController,
    public alertController:AlertController
  ) { }
  async askDelete(customer)
  {
    const alert3 = await this.alertController.create({
      subHeader: "Do you really want to delete staff?",
      
      mode: 'ios',
     
      buttons: [{
        text: 'Yes',
        handler: data => {
          
          this.delete(customer);
        },
      },{
        text:'No',
        handler:data=>
        {
          
        }
      }
      ],
    });
    await alert3.present();
   
    }
    delete(customer)
    {
      
      let newsuppliers = new Array();
      this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
      console.log(this.suppliers.length)
      this.suppliers.forEach((element)=>{
        console.log(element.phone)
        console.log(customer.phone)
        console.log(element.phone!=customer.phone)
        if(element.phone != customer.phone)
        {
           newsuppliers.push(element);
        }
        
      })
      console.log(newsuppliers.length)
      window.localStorage.setItem('suppliers',JSON.stringify(newsuppliers))
      this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'))
      this.firestore.collection('stores').doc(this.user.docID).update({
        suppliers:newsuppliers,
      })
         }

  
  returnDat:any;
  ModalPage: any;
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
           // this.selectSupplier(this.returnDat);
          },600)
        }
      });

    return await modal.present();
  }
  selectSupplier(boi){
    this.modalController.dismiss(boi);
  }



  suppliers: any[];
  call(boi) {
    this.callNumber.callNumber(boi.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  getSuppliers() {
    if (window.localStorage.getItem('suppliers')) {
      this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
    } else {

    }
  }
  user:any;
  checkPaid()
  {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res:any)=>
    {
      this.user.paid = res.paid;
      this.user.basic = res.basic;
    }
    )
    if(this.user.paid == 1)
    {
      console.log("We are here")
      this.user.basic = 1
    }
    window.localStorage.setItem('user',JSON.stringify(this.user))
  }
 
  addsupplier() {
    this.ModalPage = Addsupplier1Page;
    this.openModal();
    this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'))
    this.modalController.dismiss();
   // console.log("suppliers is********"+JSON.stringify(this.suppliers))
  
  }


  ngOnInit() {
  }
  paid:any;

  ionViewWillEnter() {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.getSuppliers();
    //this.utility.checkPaid();
   // this.utility.checkForBasicService();
    this.paid = JSON.parse(window.localStorage.getItem('paid'))
    this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'))
    console.log("s************uppliers is************"+this.suppliers)
   
  }

}
