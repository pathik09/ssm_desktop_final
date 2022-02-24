import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Platform } from "@ionic/angular";
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {SelectCustomerPage} from '../select-customer/select-customer.page'
import { ModalController } from '@ionic/angular';

import {SelectSupplierPage} from '../select-supplier/select-supplier.page'


@Component({
  selector: 'app-pos',
  templateUrl: './pos.page.html',
  styleUrls: ['./pos.page.scss'],
  providers: [DatePipe]
})
export class POSPage implements OnInit {
  
  paid:any;
  customer:any;
  generatePO()
  {
    if(this.recipt.length == 0)
  {
    alert("Please select some items")
    return;
    
   
  }
    this.selectSupplier();
  }

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    public toastController: ToastController,
    public alertController: AlertController,
    private datePipe: DatePipe,
    public firestore: AngularFirestore,
    private platform: Platform,
    private http: HttpClient,
    private auth: AngularFireAuth,
    public modalController: ModalController,
    
  ) { }
  async selectCustomer() {
    console.log(this.recipt);
    if(this.recipt.length == 0)
    {
      alert("please select items");
      return;
    }
    const modal = await this.modalController.create({
      component: SelectCustomerPage,
      cssClass: 'color-modal',
    });
    modal.onDidDismiss()
    .then((event: any) => {
      
      if (event['data']) {
        
       
        this.customer = event['data'];
        window.localStorage.setItem('selectcustomer',JSON.stringify(this.customer))
        this.endSale2();
        this.router.navigate(['invoice']);

      
      //  window.localStorage.setItem('items', JSON.stringify(this.items));
      }
    });

  return await modal.present();
}
  
  generateBill()
  {
    if(this.recipt.length == 0)
  {
    alert("Please select some items")
    return;
    
   
  }
   this.endSale();
   this.router.navigate(['invoice']);
  }


  items: any[];
  sales: any[];
  lenders: any[];
  recipt: any[] = [];
  msg: string;
  color: string;
  total: number;
  searchParam: string;
  searchFound: any[] = [];
  //paid: number = 0;
  cNum: string = "";
  cName2: string = "";
  note: string = "";
  discount: number = 0;
  revenue: number = 0;
  profit: number = 0;
  params: any;
  currentPage: string = 'dashboard'

  backDisbale = this.platform.backButton.subscribeWithPriority(999, () => {

    if (this.user.uType == 'Helper') {
      navigator['app'].exitApp();
    }
    else if (this.user.uType == 'Owner') {
      this.router.navigate(['home/dashboard'])
    }
  });

  changePage(c_page: string) {
    this.currentPage = c_page
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 800,
      color: this.color,
      position: 'top',
    });
    toast.present();
  }

  user: any;
  salesToBeUpload: any;

  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('sales')) {
      this.sales = JSON.parse(window.localStorage.getItem('sales'));
    } else {
      this.sales = [];
    }
    if (window.localStorage.getItem('lenders')) {
      this.lenders = JSON.parse(window.localStorage.getItem('lenders'));


    } else {


      this.lenders = [];
    }
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
    if (window.localStorage.getItem('salesToBeUpload')) {
      this.salesToBeUpload = JSON.parse(window.localStorage.getItem('salesToBeUpload'));
    } else {
      this.salesToBeUpload = [];
    }
  }

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      var barcode = barcodeData.text;
      var found = false;
      for (var i = 0; i < this.items.length; i++) {
        if (barcode == this.items[i].barcode) {
          let data = this.items[i];
          data.quantity = 1;
          data.index = i;
          for(let i = 0; i<this.recipt.length;i++)
          {
            if(this.recipt[i]==this.items[i])
            {
              found = true;
              this.recipt[i].quantity = this.recipt[i].quantity + 1
      
      
            }
          }
      if(!found){
          this.recipt.push(data);
      }
          this.msg = "Item added!"
          this.color = "success";
          this.presentToast();
          found = true;
          break;
        }
      }
      if (found == false) {
        this.msg = "Item not found!"
        this.color = "danger";
        this.presentToast();
      }
    }).catch(err => {
      alert(err);
    });
  }
  lowStock: number = 0;
  stockValue: any;

  getInfo() {

    this.lowStock = 0;
    if (this.items) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].index = i;
        this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
        if (this.items[i].stock < this.items[i].mquantity) {
          this.lowStock = this.lowStock + 1;
          console.log(this.items[i], 'lhdfoweg');
          }

      }
    }
    else {
      const content = "you donnot have any items in your shop"
     // this.sendNotification(content)
    }

  }


 
  calculateTotal() {
    this.total = 0;
    for (var i = 0; i < this.recipt.length; i++) {
      this.total = this.total + (this.recipt[i].rPrice * this.recipt[i].quantity);
    }
    this.total = this.total - this.discount;
  }

  addSearchItem(item) {

    let data = item;
    data.quantity = 1;
    let found = false;
    for(let i = 0; i<this.recipt.length;i++)
    {
      if(this.recipt[i]==item)
      {
        found = true;
        this.recipt[i].quantity = this.recipt[i].quantity + 1


      }
    }
if(!found){
    this.recipt.push(data);
}
    this.msg = "Item added!"
    this.color = "success";
    this.presentToast();
    this.searchParam = "";
    this.searchFound = [];
    this.calculateTotal();
  }

  deleteItem(i) {
   console.log(this.recipt[i])
   this.total = this.total - this.recipt[i].rPrice*this.recipt[i].quantity;
    /*for(let i =0;i<this.recipt.length;i++)
    {
      if(this.recipt[i]==i)
      {
        this.total = 
      }
    }*/
    this.recipt.splice(i, 1);
  }

  clearRecipt() {
    this.recipt = [];
    this.total = 0;
  }

  searchItem() {

    if (this.searchParam) {

      this.changePage('search')
      this.searchFound = [];
      var found = 0;
      if (this.searchParam != "") {
        for (var k = 0; k < this.items.length; k++) {
          if (this.items[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
            found = found + 1;
            if (found < 8) {
              this.searchFound.push(this.items[k]);
              this.searchFound[this.searchFound.length - 1].index = k;
            } else break
          } else if (this.items[k].barcode.toLowerCase().includes(this.searchParam.toLowerCase())) {
            found = found + 1;
            if (found < 8) {
              this.searchFound.push(this.items[k]);
              this.searchFound[this.searchFound.length - 1].index = k;
            } else break
          }
        }
      }
    }

    else {
      this.changePage('dashboard')
    }
  }

  async addNote() {
    const alert2 = await this.alertController.create({
      subHeader: "Would you like to add additional notes for this sale?",
      mode: 'ios',
      backdropDismiss: false,
      inputs: [
        {
          name: 'input',
          id: 'name',
          value: name,
          placeholder: "Enter the note here..",
        },
      ],
      buttons: [{
        text: 'Next',
        handler: data => {
          this.note = data.input;
        },
      },
      ]
    });
    await alert2.present();
  }


  async addDiscount() {
    const alert2 = await this.alertController.create({
      subHeader: "How much should be the discount?",
      mode: 'ios',
      backdropDismiss: true,
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the amount here..",
        },
      ],
      buttons: [{
        text: 'Next',
        handler: data => {
          this.discount = Number(data.input);
        },
      },
      {
        text: 'Cancel',
        role: 'destructive'

      }

      ]
    });
    await alert2.present();
  }
  mnumber:number;
  cAddress:String;

  async getAmount() {
   await this.selectCustomer();

  window.localStorage.setItem("selectcustomer",JSON.stringify(this.customer));

   // await alert2.present();
  }
  

  toReturn: number = 0;
  async cName() {
    const alert2 = await this.alertController.create({
      header: "Customer's name?",
      subHeader: "To Return: " + this.toReturn,
      message: "Please add customer Name",
      mode: 'ios',
      backdropDismiss: false,
      inputs: [
        {
          name: 'input',
          type: 'text',
          id: 'name',
          value: name,
          placeholder: "Enter the name here..",
        },
      ],
      buttons: [{
        text: 'Next',
        handler: data => {
          this.cName2 = data.input;
          if (!this.cName2) {
            this.msg = 'Add customer Name'
            this.presentToast()
            this.cName()
          }
          else {
            this.cNumber();
          }
        },
      },
      ]
    });
    await alert2.present();

  }
  


  async cNumber() {
    const alert2 = await this.alertController.create({
      header: "Please Add Customer's Number",
      subHeader: "Customer's number is must for future tracking",
      mode: 'ios',
      backdropDismiss: false,
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the number here..",
        },
      ],
      buttons: [{
        text: 'FINISH SALE',
        handler: data => {
          this.cNum = data.input;

          if (!this.cNum || this.cNum.length < 10) {
            this.cNumber()
            this.msg = 'Add a valid  Customer Number'
            this.presentToast()
          }
          else {
            var str = this.cNum
            var res = str.substring(0, 2)
            if (res != '91') {

              this.cNum = '+91' + this.cNum
              this.endSale2()
            }
            else {
              this.endSale2();
            }
          }

        },
      },
      ]
    });
    await alert2.present();

  }
  addStockToFireBase(data)
  {
   // console.log("We are here"+JSON.parse(data))
   //var currentDate = new Date();
    //var futureDate = new Date(currentDate.getTime() - 60000);
    //var past = Date.now() - 60000;
 //   this.firestore.collection('')
 //console.log("data is************"+JSON.stringify(data))
 
 this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).valueChanges().subscribe((res:any)=>
 {
   if(res==undefined)
   {
data.maxStockAdded= 0;
   }else
   {
     data.maxStockAdded = res.maxStockAdded
   }
 })
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).get().subscribe(data2 => {
        if (data2.exists) {
          
          this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).update({
            maxStockAdded:firebase.firestore.FieldValue.increment(1),
            stock_added: firebase.firestore.FieldValue.arrayUnion( data)
          }).then(data2 => console.log('data2')).catch((err) => {
            console.log(err);
            //this.salesToBeUpload.push(data);
           //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
            sub.unsubscribe();
          }
          )
        } else {
          this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(data.index.toString()).set({
           maxStockAdded:1,
            stock_added: firebase.firestore.FieldValue.arrayUnion (data)
          }).then(data2 => console.log('data2')).catch((err) => {
            console.log(err);
         //   this.salesToBeUpload.push(data);
           // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
            sub.unsubscribe();
          }
          )
        }
       
       
      
    })
    //console.log()

    

    
  }
  endSale() {
    this.total = 0;
    this.profit = 0;
    this.revenue = 0;
    for (var i = 0; i < this.recipt.length; i++) {
      this.items[this.recipt[i].index].stock = this.items[this.recipt[i].index].stock - this.recipt[i].quantity;
      this.total = this.total + (this.recipt[i].rPrice * this.recipt[i].quantity);
      stock_added:-this.recipt[i].quantity;
      name:this.recipt[i].name;
      date:Date.now();
      if(this.items[this.recipt[i].index].stock<this.items[this.recipt[i].index].mquantity)
      {
        
        this.sendNotification("Low Stock Notification:Item "+this.items[this.recipt[i].index].name+"is low stock.")      }
     
      this.profit = this.profit + ((this.recipt[i].rPrice -this.recipt[i].pPrice)*this.recipt[i].quantity);
      this.revenue = this.revenue + (this.recipt[i].rPrice*this.recipt[i].quantity);
      if(this.mnumber == null)
      {
        this.mnumber = 0;
      }
      
     
    }
    console.log("in the end sale");
    this.updateDailySalesandProfit(this.revenue,this.profit)
    this.total = this.total - this.discount;
    this.getAmount();
  }
  
  updateDailySalesandProfit(revenue,profit)
  {
    console.log(revenue);
    console.log(profit);
    var date = new Date();
    var date1 = this.datePipe.transform(date, 'dd/MM/yyyy');
    console.log(date1)
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).get().subscribe(data2 => {
      if (data2.exists) {
        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).update({
          sales: firebase.firestore.FieldValue.increment(1),
          profit:firebase.firestore.FieldValue.increment(profit),
          revenue:firebase.firestore.FieldValue.increment(revenue)
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
          //this.salesToBeUpload.push(data);
         //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      } else {
        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(date1).set({
          sales:1,
          revenue:revenue,
          profit:profit
         
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
       //   this.salesToBeUpload.push(data);
         // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      }
     
     
    
  })

  
 this.profit = 0;
 this.revenue = 0;

  }
Products:any;
currentcgst:any;
currentsgst:any;
finalgst:any;
tempObject:any;
  endSale2() {
    window.localStorage.setItem('items', JSON.stringify(this.items));
    if(this.paid == 1)
    {
    this.firestore.collection('stores').doc(this.user.docID).update({
      items: this.items,
    }).then(data2 => console.log('data2'))
  }
    const date = new Date();
    const pathDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    let data = {
      recipt: this.recipt,
      total: this.total,
      paid: this.paid,
      cNum: this.cNum,
      cName: this.cName2,
      date: date,
      discount: this.discount,
      note: this.note,
      soldBy: this.user.name,
    }
    //console.log("**************length****&&&&&&&&&********"+this.recipt.length);
    window.localStorage.setItem("currentsale",JSON.stringify(data))
    console.log(data.recipt)
    this.Products = new Array();
    console.log(this.recipt.length)
    this.finalgst =0;
   // this.Products = data.recipt;
    
   // data.recipt.forEach()
   //data.recipt[0].quantity=10;
   let idiscount = this.discount / this.recipt.length;
   console.log(idiscount)
   let totalPrice = 0;
   for(let i = 0;i<this.recipt.length;i++)
   {
    totalPrice = totalPrice + this.recipt[i].rPrice;
   }
   let discountperPrice = this.discount / totalPrice;
  for(let i=0;i<this.recipt.length;i++){ 
    this.recipt = data.recipt;

      //console.log(data.recipt[i].gst);
      //console.log(data.recipt[i].rPrice); 
      //console.log(data.recipt[i].quantity)
    
      if(data.recipt[i].gst != 0)
      {
       
        this.tempObject = data.recipt[i];
       // console.log(this.tempObject);
       if(this.tempObject.gst == null)
       {
        idiscount = this.tempObject.rPrice * discountperPrice;
        this.tempObject.rPrice = this.tempObject.rPrice - idiscount;
       }else{
         idiscount = this.tempObject.rPrice * discountperPrice;
        let idiscountgst = idiscount * this.tempObject.gst/100;
        console.log("GST*******"+this.tempObject.gst);
        let gston = this.tempObject.rPrice * this.tempObject.gst/100-idiscountgst
        console.log(gston);
        this.tempObject.rPrice = this.tempObject.rPrice - idiscount;
        this.tempObject.rPrice = this.tempObject.rPrice - gston;
        console.log("rPrice"+this.tempObject.rPrice);
        this.finalgst+=gston*this.tempObject.quantity;
       

       }
        
        
        //console.log(gston);

   
        //this.tempObject.cgst = this.tempObject.rPrice - gston
        //this.tempObject.cgst = this.tempObject.cgst - idiscountgst;

       // console.log(data.recipt[i]);
        this.Products.push(this.tempObject);
       // console.log(this.Products);
        
       // console.log("Product Retail Price"+this.tempObject.rPrice);
 



        
        this.tempObject = data.recipt[i]; 
       // console.log(this.tempObject); 
  
      }
      
      
    } 
    
    if(this.currentcgst !=0)
      {
      this.currentcgst = this.finalgst/2;
      this.currentcgst = this.finalgst/2;
      } 
      console.log("CURRENT CGST:",this.currentcgst);
    
   
    const sale = JSON.stringify(data);
    if (this.paid < this.total) {
      this.lenders.push(data);
      window.localStorage.setItem('lenders', JSON.stringify(this.lenders));
    }
    const content = "sale made";
     this.shopOwnerPlayerID = this.user.playerID;
   // this.getShopOwnerID();
   // this.sendNotification(content);
   console.log(data.recipt)

   
   
  //console.log(this.Products);
   window.localStorage.setItem("Products",JSON.stringify(this.Products));
   window.localStorage.setItem("cgst",JSON.stringify(this.currentcgst))
   window.localStorage.setItem("sgst",JSON.stringify(this.currentcgst))
   console.log("after saving the gst information")
    this.sales.push(data);
    //this.monthlyStuff(this.sales)
    window.localStorage.setItem('sales', JSON.stringify(this.sales));
    for(let i = 0;i<this.recipt.length;i++)
    { let data = {
      stock: -this.recipt[i].quantity,
      customer_name:this.customer.name,
      customer_no:this.customer.phone,
      Date:this.datePipe.transform(new Date(),'dd/MM/yyyy'),
      maxStockAdded:0,
      index:this.recipt[i].i
      

      
    }
    
   
   console.log("*********data**********"+JSON.stringify(data));
   if(this.paid == 1)
   {
    this.addItemStockToFireBase(this.recipt[i],data);
  this.addStockToFireBase(data);
}}
    
    this.color = "success";
 //   this.presentToast();
    

    this.discount = 0;
    this.presentToast()
    this.msg = "Sale completed!";
  }

  sendNotification(content) {
    console.log(content);

    var header = new HttpHeaders();
    header.append("Content-Type", "application/json");
    console.log("ShopOwnerPlayerID"+this.shopOwnerPlayerID);


    return this.http
      .post(
        "https://exportportal.site/ssmpushes.php",
        {
          message: content,
          playerID: this.user.playerId,
        },
        { headers: header, responseType: "text" }
      )
      .subscribe(
        (resp) => {
          console.log(resp);

        },
        (error) => { }
      );

  }

  back() {
    if(this.user.uType=='Owner')
    {
    this.router.navigate(['home/dashboard']);
    }
    else{
      this.router.navigate(['home/inventory']);
    }
  }

  statSales: any;
  temparray: any[] = [];

/*  getSales() {
    const date = new Date();
    const pathDate = this.datePipe.transform(date, 'ddMMyyyy');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc(pathDate).valueChanges().subscribe((data: any) => {
      this.statSales = data;
      this.revenue = 0;
      this.profit = 0;

      if (this.statSales) {
        if (this.statSales.sales) {
          for (var i = 0; i < this.statSales.sales.length; i++) {
            this.statSales.sales[i] = JSON.parse(this.statSales.sales[i]);
            this.revenue = this.revenue + this.statSales.sales[i].total;
            if (this.statSales.sales[i].recipt.length > 0) {
              for (var k = 0; k < this.statSales.sales[i].recipt.length; k++) {
                this.profit =
                  (this.statSales.sales[i].recipt[k].rPrice * this.statSales.sales[i].recipt[k].quantity)
                  - (this.statSales.sales[i].recipt[k].pPrice * this.statSales.sales[i].recipt[k].quantity);
                console.log(this.profit);
                this.temparray.push(this.profit)


              }

            }
          }


          this.calculateProfit(this.temparray);

        }
      }

    })

  }
  */
  a: number = 0;
  sub: number = 0;

  calculateProfit(array) {

    for (var i = 0; i < array.length; i++) {


      this.sub = array[i] + this.a;
      this.a = this.sub


    }

  }
  sal: number = 0;
  chk: number;
  discounts: number[] = [];
  reven: number[] = [];
  lett: number = 0;
  lets: number = 0;
  discountsthismonth: number = 0;
  revenuethismonth: number = 0;


  monthlyStuff(sale) {
    
  console.log('sale', sale);
    for (var i = 0; i < sale.length; i++) {
      this.sal = sale.length;
      if (sale[i].discount) {

        this.discounts.push(sale[i].discount)
      }

      if (sale[i].total) {

        this.reven.push(sale[i].total)
      }

    }

    console.log('discounts', this.discounts);
    console.log('total', this.reven);
    console.log('total sales', this.sal);

    for (var i = 0; i < this.discounts.length; i++) {
      this.lett = this.discounts[i] + this.lett
      this.discountsthismonth = this.lett
    }

    for (var i = 0; i < this.reven.length; i++) {

      this.lets = this.reven[i] + this.lets
      this.revenuethismonth = this.lets

    }

    alert('Discounts this month is' + this.discountsthismonth + "- okey now lets check revenue " + this.revenuethismonth + "-sales check " + this.sal)
    this.uploadToFirestore()


  }



  uploadToFirestore() {
    let currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    console.log('today is=>', monthNames[currentDate.getMonth()]);
    console.log('discounts', this.discountsthismonth, 'sales', this.sal, 'revenue', this.revenuethismonth);

    const discounts = this.discountsthismonth;
    const sales = this.sal;
    const revenue = this.revenuethismonth
    this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).valueChanges().subscribe((res: any) => {

      if (res == undefined) {
        this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).set({
          discounts,
          sales,
          revenue,
        }).then(() => {
          this.msg = 'Monthly stats updated'
          this.presentToast()
        }).catch(err => {

          this.msg = JSON.stringify(err.message)
          this.presentToast()

        })
      }
      else {
        this.firestore.collection('stores').doc(this.user.docID).collection('monthly').doc(monthNames[currentDate.getMonth()]).update({
          discounts,
          sales,
          revenue,
        }).then(() => {

          this.msg = 'Monthly stats updated'
          this.presentToast()
        }).catch(err => {

          this.msg = JSON.stringify(err.message)
          this.presentToast()

        })
      }

    })
  }
  uType:any;

  ngOnInit() {
   this.user = JSON.parse(window.localStorage.getItem('user'))
   this.uType = this.user.uType;

    if(this.user.uType==1)
    {
    this.checkIfHelperExists();
    }
    if(this.paid == 1)
    {
    this.getcurentUsershop()
    }
    
  }


  ionViewWillEnter() {
    this.getItems();
    this.paid = window.localStorage.getItem("paid");
  }

  ionViewWillLeave() {
    this.recipt = [];
  }


  shopOwnerPlayerID: string;

  getShopOwnerID() {
    console.log("Usertype"+this.user.uType);
    console.log("phone"+this.user.phone)
    if(this.user.uType=='Owner')
    {
      console.log("We are here in the owner")
      this.firestore.collection('Owner', q => q.where('phone', '==', this.user.phone)).valueChanges().subscribe((r: any) => {
        console.log('lkdbvo', r);
        this.shopOwnerPlayerID = r[0].playerId;   
      })
    }
    else{

    const auth = this.auth.authState.subscribe(user => {
      this.firestore.collection('Helper').doc(user.uid).valueChanges().subscribe((cu: any) => {
        if (cu == undefined) {

        }
        else {

          this.firestore.collection('Owner', q => q.where('phone', '==', cu.ownerPhone)).valueChanges().subscribe((r: any) => {
            console.log('lkdbvo', r);
            this.shopOwnerPlayerID = r[0].playerId
       
          })

        }
      })
    })
    }
  }



  getcurentUsershop() {
    this.user = JSON.parse(window.localStorage.getItem('user'));

    console.log(this.user);

    this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {


      if (res != undefined) {

        if (res.items) {

          if (res.items.length < 1) {


          }
          else {


            this.items = JSON.parse(window.localStorage.getItem('items'));
            console.log(this.items, 'item');
            this.items = res.items
            window.localStorage.setItem('items', JSON.stringify(this.items));
            this.items = JSON.parse(window.localStorage.getItem('items'));


          }
        }
      }
      else {

      }
    })
  }
  supplier:any;
async selectSupplier() {
  const modal = await this.modalController.create({
    component: SelectSupplierPage,
    cssClass: 'color-modal',
  });
  modal.onDidDismiss()
  .then((event: any) => {
    
    if (event['data']) {
      
      
     
      this.supplier = event['data'];
      console.log(this.supplier);
      window.localStorage.setItem('selectsupplier',JSON.stringify(this.supplier))
      window.localStorage.setItem("po",JSON.stringify(this.recipt));
    this.router.navigate(['purchaseorder']);
    
    //  window.localStorage.setItem('items', JSON.stringify(this.items));
    }
  });

return await modal.present();
}
async createQuotation() {
  if(this.recipt.length == 0)
  {
    alert("Please select some items")
    return;
    
   
  }
  const modal = await this.modalController.create({
    component: SelectCustomerPage,
    cssClass: 'color-modal',
  });
  modal.onDidDismiss()
  .then((event: any) => {
    
    if (event['data']) {
      
      
     
      this.customer = event['data'];
      console.log(this.customer);
      window.localStorage.setItem('selectCustomer',JSON.stringify(this.customer))
      window.localStorage.setItem("po",JSON.stringify(this.recipt));
    this.router.navigate(['quotation']);
    
    //  window.localStorage.setItem('items', JSON.stringify(this.items));
    }
  });

return await modal.present();
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
 addItemStockToFireBase(item,data)
 {
   console.log("we are called");
   const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).get().subscribe(data2 => {
     if (data2.exists) {
       this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).update({
         stock: firebase.firestore.FieldValue.increment(data.stock),
       }).then(data2 => console.log('data2')).catch((err) => {
         console.log(err);
         //this.salesToBeUpload.push(data);
        //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
         sub.unsubscribe();
       }
       )
     } else {
       this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).set({
         stock:item.stock + data.stock,
      
        
       }).then(data2 => console.log('data2')).catch((err) => {
         console.log(err);
      //   this.salesToBeUpload.push(data);
        // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
         sub.unsubscribe();
       }
       )
     }
    
    
   
 })
 }ndsa;e

}
