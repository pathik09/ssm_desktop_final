import { ContactsListPage } from './../contacts-list/contacts-list.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-addsupplier1',
  templateUrl: './addsupplier1.page.html',
  styleUrls: ['./addsupplier1.page.scss'],
})
export class Addsupplier1Page implements OnInit {
  paid:any;
  ionViewWillEnter() {
    this.paid = window.localStorage.getItem("paid");
  }


  constructor(
    private modalCtrl: ModalController,
    public toastController: ToastController,
    private fireStore : AngularFirestore,
    
  ) {
  }

  name: string;
  phone: string;
  address: string;
  suppliers: any[];
  params: any;
  choice:String="";
  gstin:any;
  company_name:string;
  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Supplier Added!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
  setChoice(choice: string) {
    this.choice = choice;
  }

  getSuppliers() {
    if (window.localStorage.getItem('suppliers')) {
      this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
    } else {
      this.suppliers = [];
    }
  }
  getcustomers() {
    if (window.localStorage.getItem('customers')) {
      this.customers = JSON.parse(window.localStorage.getItem('customers'));
    } else {
      this.customers = [];
    }
  }


  a: string
  user:any;
  customers:any;
  addCustomer(){
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if(this.customers == undefined)
    {
      this.customers = [];
    }
    if(this.name == undefined)
    {
      this.name = "";
    }
    if(this.phone == undefined)
    {
      this.phone = "";
    }
    if(this.address == undefined)
    {
      this.address = ""
    }
    if(this.gstin == undefined)
    {
      this.gstin = ""
    }

    let data = {
      name: this.name,
      phone: this.phone,
      address:this.address,
      gstin:this.gstin
    }
    this.customers.push(data);
    window.localStorage.setItem('customers', JSON.stringify(this.customers));
    if(this.paid==1)
    {
    this.fireStore.collection('stores').doc(this.user.docID).update({
      customers:firebase.firestore.FieldValue.arrayUnion( data)
    })
  }

    this.presentToast();
    this.modalCtrl.dismiss(data);

  }
  addSupplier() {

   this.user = JSON.parse(window.localStorage.getItem('user'));
   if(this.suppliers == undefined)
   {
     this.suppliers = [];
   }
   if(this.name == undefined)
    {
      this.name = "";
    }
    if(this.phone == undefined)
    {
      this.phone = "";
    }
   if(this.address == undefined)
   {
      this.address = ""
   }
   if(this.company_name == undefined)

   {
     this.company_name = "";
   }

    let data = {
      name: this.name,
      phone: (this.phone as string).includes('+') ? this.phone : '+91' + this.phone,
      address:this.address,
      company_name:this.company_name
    }
    this.suppliers.push(data);
    window.localStorage.setItem('suppliers', JSON.stringify(this.suppliers));
    if(this.paid==1)
    {
    this.fireStore.collection('stores').doc(this.user.docID).update({
      suppliers:firebase.firestore.FieldValue.arrayUnion( data)
    })
  }

    this.presentToast();
    this.modalCtrl.dismiss(data);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.getSuppliers();
    this.getcustomers();
  }

  async showContact() {
    var modal = await this.modalCtrl.create({
      component: ContactsListPage,
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(data => {
      if (data.role == 'selected') {
        const contact = data.data.contact;
        this.name = contact.name;
        this.phone = contact.phone.toString().replace(/\s+/g, '');
      }
    });
    modal.present();
  }

}
