
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AddCustomerPage } from '../../add-customer/add-customer.page'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(

    private router: Router,
    private callNumber: CallNumber,
    private firestore : AngularFirestore,
    public modalController: ModalController,
    private alertController:AlertController
  ) { }
  customers:any;
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
          console.log("We are here");
          this.returnDat = event['data'];
          setTimeout(()=>{
            this.selectSupplier(this.returnDat);
          },600)
        }
      });

    return await modal.present();
  }
  selectSupplier(boi){
    this.modalController.dismiss(boi);
  }



  
  call(boi) {
    this.callNumber.callNumber(boi.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  getSuppliers() {
    if (window.localStorage.getItem('customers')) {
      this.customers = JSON.parse(window.localStorage.getItem('customers'));
    } else {

    }
      }
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
      this.customers = JSON.parse(window.localStorage.getItem('customers'));
      console.log(this.customers.length)
      this.customers.forEach((element)=>{
        console.log(element.phone)
        console.log(customer.phone)
        console.log(element.phone!=customer.phone)
        if(element.phone != customer.phone)
        {
           newsuppliers.push(element);
        }
        
      })
      console.log(newsuppliers.length)
      window.localStorage.setItem('customers',JSON.stringify(newsuppliers))
      this.customers = JSON.parse(window.localStorage.getItem('customers'))
      this.firestore.collection('stores').doc(this.user.docID).update({
        customers:newsuppliers,
      })
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
    this.ModalPage = AddCustomerPage;

      
     
  }


  ngOnInit() {
    this.customers = JSON.parse(window.localStorage.getItem('customers'));
  }
  paid:any;

  ionViewWillEnter() {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.getSuppliers();
    this.paid = JSON.parse(window.localStorage.getItem('paid'))
    this.customers = JSON.parse(window.localStorage.getItem('customers'));
    console.log(JSON.stringify(this.customers))
    
    
    

  }

}
