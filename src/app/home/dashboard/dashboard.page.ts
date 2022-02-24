import { TranslateConfigService } from './../../translate-config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from 'src/app/add-item/add-item.page';
import { ChoicesuppcustPage } from 'src/app/choicesuppcust/choicesuppcust.page';
import { ExcelImportPage } from 'src/app/excel-import/excel-import.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { AddSupplierPage } from 'src/app/add-supplier/add-supplier.page';
import { UtilityMethodsService } from 'src/app/utility-methods.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DatePipe]
})
export class DashboardPage implements OnInit {

  constructor(
    public TranslateConfigService:TranslateConfigService,
private utility:UtilityMethodsService,    
    public modalController: ModalController,
    private router: Router,
    public firestore: AngularFirestore,
    private datePipe: DatePipe,
    private translateConfigService: TranslateConfigService,
  ) { }
  ModalPage: any;
  returnDat: any;
  user: any;
  statSales: any;
  revenue: number = 0;
  profit: number = 0;
  items: any;
  lenders: any;
  suppliers: any;
  params: any;
  usertype: any;
  paid :any;
  
  




  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        if (event['data']) {
          this.returnDat = event['data'];
        }
      });

    return await modal.present();
  }

  gotTotPage(path: string) {
    this.router.navigate([path]);
  }

  openPOS() {
    this.router.navigate(['pos']);
  }

  addItem() {
    this.ModalPage = AddItemPage;
    this.openModal();
  }

  addSupplier() {
    this.ModalPage = AddSupplierPage;
    this.openModal();
 
 
    }

  excelImport() {
    this.ModalPage = ExcelImportPage;
    this.openModal();
  }
  customers:any;

  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('helpers')) {
      this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
    } else {
      this.helpers = [];
    }
    if (window.localStorage.getItem('suppliers')) {
      this.suppliers = JSON.parse(window.localStorage.getItem('suppliers'));
    } else {
      this.suppliers = [];
    }
    if (window.localStorage.getItem('customers')) {
      this.customers = JSON.parse(window.localStorage.getItem('customers'));
    } else {
      this.customers = [];
    }
    if (window.localStorage.getItem('lenders')) {
      this.lenders = JSON.parse(window.localStorage.getItem('lenders'));
    } else {
      this.lenders = [];
    }
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
      // this.getHelpers()
    } else {
      this.user = [];
    }
  }

  helpers: any;

  getHelpers() {
    this.firestore.collection('helpers', q => q.where('docID', '==', this.user.docID)).valueChanges().subscribe(res => {

      if (res.length < 1) {

      }
      else {
        this.helpers = res.length;

      }

    })

  }


  a: number = 0;
  sub: number = 0;

  calculateProfit(array) {

    for (var i = 0; i < array.length; i++) {


      this.sub = array[i] + this.a;
      this.a = this.sub


    }

  }

  mDiscounts: any;
  mRevenue: any;
  mSales: any;

  getMonthlyStats() {
    let currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    if (this.user.docID) {
      this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).valueChanges().subscribe((res: any) => {
        if (res == undefined) {

        }
        else {
          this.mDiscounts = res.discounts;
          this.mRevenue = res.revenue;
          this.mSales = res.sales;
        }

      })
    }
  }

  temparray: any[] = [];
  getDailySales() {
    console.log("I am called");
    var date = new Date();
    var date1 = this.datePipe.transform(date, 'dd/MM/yyyy');
    console.log(date1)

    if (this.user.docID) {
      this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).valueChanges().subscribe((res: any) => {
        if (res == undefined) {

        }
        else {
          this.profit = res.profit;
          this.revenue = res.revenue;
          this.statSales = res.sales;
        }

      })
      
    }
    
   // this.getItems();
  }
  ionViewWillEnter()
  {
    
    this.user = JSON.parse(window.localStorage.getItem('user'))
    
    console.log(this.user.uType)
    if(this.user.uType=='Owner')
    {
      this.utility.checkPaid();
     // this.utility.checkForBasicService();
    }
    if(this.user.uType == 1)
    {
    this.getOwnerPlayerId();
    }
  }
  getOwnerPlayerId() {
    if (this.user.docID) {
      this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {
        if (res == undefined) {

        }
        else {
          this.user.playerId = res.playerID;
          this.items = res.items;
          this.suppliers = res.suppliers;
          this.helpers = res.helper;
          window.localStorage.setItem('user', JSON.stringify(this.user));
          window.localStorage.setItem('suppliers',JSON.stringify(this.suppliers))
          window.localStorage.setItem('helpers',JSON.stringify(this.helpers));
          window.localStorage.setItem('item',JSON.stringify(this.items));
          this.getItems();
        }

      })
    }
  }

  ngOnInit() {
    this.TranslateConfigService.setLanguage("English");

    this.getItems();
    // this.getMonthlyStats()
    const date = new Date();
    const pathDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.getDailySales();
    if (this.user.uType == 1) {
      this.getOwnerPlayerId();
    }



  }

}
