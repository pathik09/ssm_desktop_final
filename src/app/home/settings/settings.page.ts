
import { TranslateConfigService } from './../../translate-config.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AddSupplierPage } from 'src/app/add-supplier/add-supplier.page';
import { UtilityMethodsService } from 'src/app/utility-methods.service';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  paid:any;

  constructor(
    public utility:UtilityMethodsService,

    public actionSheetController: ActionSheetController,
    private firebaseauth: AngularFireAuth,
    public toastController: ToastController,
    public alertController: AlertController,
    private callNumber: CallNumber,
    public modalController: ModalController,
    private router: Router,
    private socialSharing: SocialSharing,
    private TranslateConfigService: TranslateConfigService,
    private firestore: AngularFirestore,
    

  ) {
    this.currentDiv = 'one'
  }
call()
{
  this.callNumber.callNumber('+919737694267',true);
}
email()
{
this.socialSharing.shareViaEmail('Query about smart stock management','HI Team,',['info@smartbusinesssolutions.in'])  
}
gotowebsite()
{
  window.open("https://www.smartbusinessolutions.in/", "_blank");
}
watchtutorialvideos()
{
  window.open("https://www.youtube.com/channel/UCXQ90ZW8P6J45rhnbDByVhw", "_blank");
}
  items: any[];
  toShow: any[];
  lenders: any[];
  sales: any[];
  searchParam: string;
  searchFound: any[] = [];
  msg: string;
  color: string;
  index: number;
  toCollect: number = 0;
  lowStock: number = 0;
  highStock: number = 0;
  stockValue: number = 0;
  salesValue: number = 0;
  ModalPage: any;
  returnDat: any;
  currentDiv: string;
  helpers: any;
  user:any;
  params: any;
  languagesAvailable: string[] = ['English', 'Gujrati', 'Hindi', 'Marathi', 'Bengali', 'Tamil', 'Malayalam', 'Telugu', 'Kannada']
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
      this.user.basic = 1
    }
    window.localStorage.setItem('user',JSON.stringify(this.user))
  }


  currentPage(name) {
    this.currentDiv = name

  }

  //toasts
  async toastCreater() {
    const toast = await this.toastController.create({
      color: this.color,
      duration: 2000,
      message: this.msg,
      animated: true,
      mode: 'ios',
    });
    await toast.present();
  }

  selectedLanguage: string;

  languageChanged(lang: string) {

    this.selectedLanguage = lang
    console.log('language=>', this.selectedLanguage);
    this.TranslateConfigService.setLanguage(this.selectedLanguage);
    this.updateLanguage(this.selectedLanguage)
  }

  updateLanguage(param: string) {
    this.temp = JSON.parse(window.localStorage.getItem('user'))
    this.temp.language = param;

    window.localStorage.setItem('user', JSON.stringify(this.temp));
  }

  temp: any;
  message: string;
 

  async getHelp() {
    const alert2 = await this.alertController.create({
      subHeader: "What is your query?",
      mode: 'ios',
      backdropDismiss: false,
      inputs: [
        {
          name: 'message',
          id: 'message',
          placeholder: "Enter the querry here..",
        },

      ],
      buttons: [{
        text: 'GET HELP',
        handler: data => {


          this.message = data.message;

          const user = JSON.parse(window.localStorage.getItem('user'))
          const text = 'Hi Smart Developers, My name is ' + user.name + ',I am facing following issue' + this.message
          alert(text)
          this.socialSharing.shareViaWhatsAppToPhone('+923168807850', text, "")
        },
      },
      {
        text: 'Cancel',
        role: 'destructive',
      }
      ]
    });
    await alert2.present();
  }

  openPlaystore() {
    console.log('method ');

    window.open('https://play.google.com/store/apps/details?id=com.app.ssm')

  }

  phone: number;
  name: string;
  async addNote() {
    const alert2 = await this.alertController.create({
      subHeader: "please add a phone number with 913568878952 format",
      mode: 'ios',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name',
          id: 'name',
          placeholder: "Enter the name here..",
        },
        {
          name: 'phone',
          id: 'phone',
          type: 'number',
          placeholder: "Enter the number here..",
        },
      ],
      buttons: [{
        text: 'Next',
        handler: data => {

          this.phone = data.phone;
          this.name = data.name;

          if (!this.name || !this.phone) {
            this.msg = 'Fields cannot be left blank'
            this.toastCreater()
            this.addNote()
          }
          else {
            alert('all okey')
            const docID = this.storeInfo.docID
            const phone = '+' + this.phone
            const name = this.name
            const timestamp = new Date()
            this.firestore.collection('helpers', q => q.where('phone', '==', phone)).valueChanges().subscribe((res: any) => {
              console.log('lkaho', res[0].userID + 'phone' + phone);

              if (res.length < 1) {

                this.msg = 'cannot send invitation user donnot exist!!'
                this.toastCreater()
              }
              else {
                const requestStatus = 'recieved'
                this.firestore.collection('helpers').doc(res[0].userID).update({
                  docID,
                  name,
                  phone,
                  timestamp,
                  requestStatus
                }).then(() => {

                  this.msg = 'helper invitation sent successfully'
                  this.toastCreater()
                }).catch(err => {

                  this.msg = JSON.stringify(err.message)
                  this.toastCreater()
                })

              }
            })

          }
        },
      }, {
        text: 'Cancel',
        role: 'destructive',
      }
      ]
    });
    await alert2.present();
  }


  checkRequests() {
    this.currentPage('two')
   let owner = JSON.parse(window.localStorage.getItem('user'))
    console.log('check req', this.storeInfo);
    console.log(owner.phone);
    let owner_phone = '+'+owner.phone;
    this.firestore.collection('helpers', q => q.where('ownerPhone', '==', owner_phone).where('requestStatus', '==', 'pending')).valueChanges().subscribe((data: any) => {
      console.log(data);
      if (data == '') 
      {
        console.log("We are here");
        this.msg = 'NO new requests at the moment'
        this.toastCreater()
        this.helpers = undefined
      }
      else {
        console.log("Data is"+data);
        this.helpers = data

      }

    })

  }

helperphone:any;
  accept(id: string) {
    console.log(id);
    let helperphone;
    this.paid = window.localStorage.getItem('paid');
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
    if(window.localStorage.getItem('helper'))
    {
      this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
    }else {
      this.helpers = [];
    }
    
    if(this.paid == 1)
    {
    const requestStatus = 'approved'
    const docID = this.user.docID
   
    
    
    let data = 
    {
   
      id:id,
    }
   
   
    
    
   
    this.firestore.collection('stores').doc(docID).update({
      helper: firebase.firestore.FieldValue.arrayUnion( data)
    }).then(() => {
      alert('PERMITED')
      this.currentDiv = 'one'
    }).catch
    this.firestore.collection('helpers').doc(id).update({
      docID,
      requestStatus,
    }).then(() => {
      alert('PERMITED')
      this.currentDiv = 'one'
    }).catch
    this.firestore.collection('helpers').doc(id).valueChanges().subscribe((res: any) => {
      if (res == undefined) {

      }
      else {
      this.helperphone = res.phone;
      }

    })
    let data1 = 
    {
      
      id:id,
    }
    this.helpers.push(data1);
  
  
    window.localStorage.setItem('helpers',JSON.stringify(this.helpers)) 
  }
  else{
    this.router.navigate(['cart'])
  }  
  }

  logout() {
    this.firebaseauth.auth.signOut();
  }
  storeInfo: any;
 
  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('helpers')) {
      this.lenders = JSON.parse(window.localStorage.getItem('helpers'));
    } else {
      this.lenders = [];
    }
    if (window.localStorage.getItem('sales')) {
      this.sales = JSON.parse(window.localStorage.getItem('sales'));
    } else {
      this.sales = [];
    }
    if (window.localStorage.getItem('storeInfo')) {
      this.storeInfo = JSON.parse(window.localStorage.getItem('storeInfo'));
    } else {
      this.storeInfo = [];
    }
    if (window.localStorage.getItem('sales')) {
      this.sales = JSON.parse(window.localStorage.getItem('sales'));
    } else {
      this.sales = [];
    }
    setTimeout(() => {
      this.getInfo();
    }, 600)
  }

  getInfo() {
    this.toCollect = 0;
    this.lowStock = 0;
    this.highStock = 0;
    this.stockValue = 0;
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].index = i;
      this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
      if (this.items[i].stock < 10) {
        this.lowStock = this.lowStock + 1;
      }
      if (this.items[i].stock > 30) {
        this.highStock = this.highStock + 1;
      }
    }
    this.toShow = this.items;
    for (var i = 0; i < this.lenders.length; i++) {
      if (this.lenders[i].paid) {
        this.toCollect = this.toCollect + (this.lenders[i].total - this.lenders[i].paid);
      } else {
        this.toCollect = this.toCollect + (this.lenders[i].total);
      }
    }

    for (var i = 0; i < this.sales.length; i++) {
      if (this.sales[i].paid) {
        this.salesValue = this.salesValue + Number(this.sales[i].paid);
      }
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }
gotoUrl(url:string){
  this.router.navigateByUrl(url);
}
  checkboxClick(e, value) {
    console.log(value);
    this.languageChanged(value)
    var statement = true;
    if (statement) {
      e.checked = true;
    }
    this.msg = 'Language Changed!!'
    this.toastCreater()
    this.currentDiv = 'one'

  }
  addSupplier() {
    this.ModalPage = AddSupplierPage;
    this.openModal();
  }
  


  ngOnInit() {

  }

  ionViewWillEnter() {
    
    console.log("we are here***************************")
    this.user = window.localStorage.getItem('user')
    this.getItems();
    this.utility.checkPaid();
    this.utility.checkForBasicService();
    this.paid = JSON.parse(window.localStorage.getItem('paid'))
   
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });
  }

}
