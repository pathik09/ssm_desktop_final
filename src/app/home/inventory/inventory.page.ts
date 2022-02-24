import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddItemPage } from 'src/app/add-item/add-item.page';
import * as firebase from 'firebase';
import { SelectSupplierPage } from 'src/app/select-supplier/select-supplier.page';
import { SelectpurchaseOrderPage } from 'src/app/selectpurchaseorder/selectpurchaseorder.page';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ExcelImportPage } from 'src/app/excel-import/excel-import.page';
import { UtilityMethodsService } from 'src/app/utility-methods.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  constructor(
    public actionSheetController: ActionSheetController,
    private barcodeScanner: BarcodeScanner,
    public toastController: ToastController,
    public alertController: AlertController,
    private callNumber: CallNumber,
    public modalController: ModalController,
    public firestore: AngularFirestore,
    private router: Router,
    private datePipe: DatePipe,
    private http: HttpClient,
    private utility:UtilityMethodsService
    
  ) { }
  
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
  supplier: any;
  purchaseOrder:any;
  selectedpurchaseorder:any;
  
  suppliers:any;
  customers:any;

 

 
  


  params:any;
  shopOwnerPlayerID:any;
  getInfo1() {

    this.lowStock = 0;
    if (this.items) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].index = i;
        this.stockValue = this.stockValue + (this.items[i].stock * this.items[i].pPrice);
        if (this.items[i].stock < this.items[i].mquantity) {
          this.lowStock = this.lowStock + 1;
         // console.log(this.items[i], 'lhdfoweg');
          const content = "Low Stock Notification! This is to notify you "+this.items[i].name +"is below minimum quantity"+this.items[i].mquantity
          this.sendNotification(content);
        }

      }
    }
    else {
      const content = "you donnot have any items in your shop"
     // this.sendNotification(content)
    }

  }
  sendNotification(content) {
  //  console.log(content);

    var header = new HttpHeaders();
    header.append("Content-Type", "application/json");


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

  
  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        this.getItems();
        if (event['data']) {
          this.returnDat = event['data'];
         
        }
      });

    return await modal.present();
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

  addItem() {
    this.ModalPage = AddItemPage;
    this.openModal();
  }

  ngOnInit() {
  }


  async addSupplier(item) {
    const modal = await this.modalController.create({
      component: SelectSupplierPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        this.getItems();
        if (event['data']) {
         
          this.supplier = event['data'];
        
        //  window.localStorage.setItem('items', JSON.stringify(this.items));
        }
      });

    return await modal.present();
  }
  async addpurchaseorder(item) {
    const modal = await this.modalController.create({
      component: SelectpurchaseOrderPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        this.getItems();
        if (event['data']) {
          this.selectedpurchaseorder = event['data'];
         
         
        
        
        //  window.localStorage.setItem('items', JSON.stringify(this.items));
        }
      });

    return await modal.present();
  }

  async editPurchase(item) {
    this.items.forEach((value, index) => {
      value.i = index;
   });
    const alert2 = await this.alertController.create({
      subHeader: "Enter the purchase price in rupees",
      header: "This option is to change the pruchase price of the item stored in the app.",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the pruchase price here..",
        },
      ],
      buttons: [{
        text: 'Change',
        handler: data => {
          this.items[item.i].pPrice = Number(data.input);
          window.localStorage.setItem('items', JSON.stringify(this.items));
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        handler: data => {

        }
      }
      ]
    });
    if(this.paid == 1)
    {
    this.addToFireBase();
    }
    await alert2.present();
  }
  
  async editUom(item) {
    this.items.forEach((value, index) => {
      value.i = index;
   });
    const alert2 = await this.alertController.create({
      subHeader: "Enter the purchase price in rupees",
      header: "This option is to change the pruchase price of the item stored in the app.",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'text',
          id: 'name',
          value: name,
          placeholder: "Enter the units of measurement here..",
        },
      ],
      buttons: [{
        text: 'Change',
        handler: data => {
          this.items[item.i].uom = data.input;
          window.localStorage.setItem('items', JSON.stringify(this.items));
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        handler: data => {

        }
      }
      ]
    });
    this.addToFireBase();
    await alert2.present();
  }
  addFirebaseExample()
  {
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
    
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").get().subscribe(data2 => {
      if (data2.exists) {
        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").update({
          sales: firebase.firestore.FieldValue.arrayUnion("Add thayu")
        }).then(data2 => console.log('data2')).catch((err) => {
          //console.log(err);
          //this.salesToBeUpload.push(data);
         //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      } else {
        this.firestore.collection('stores').doc(this.user.docID).collection('sales').doc("Sales").set({
          sales: firebase.firestore.FieldValue.arrayUnion("Add thayu")
        }).then(data2 => console.log('data2')).catch((err) => {
          //console.log(err);
       //   this.salesToBeUpload.push(data);
         // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      }
    })
  }

  async editRetail(item) {
    this.items.forEach((value, index) => {
      value.i = index;
   });
   window.localStorage.setItem('items', JSON.stringify(this.items));
    const alert2 = await this.alertController.create({
      subHeader: "Enter the retail price",
      header: "This option is to change the retail price of the item stored in the app.",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the retail price here..",
        },
        
      ],
      buttons: [{
        text: 'Change',
        handler: data => {
         
          this.items[item.i].rPrice = Number(data.input);
          window.localStorage.setItem('items', JSON.stringify(this.items));
          this.addToFireBase();
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        handler: data => {

        }
      }
      ]
    });
    
    await alert2.present();
  }

  async changeStock(item) {
    this.items.forEach((value, index) => {
      value.i = index;
   });
    const alert3 = await this.alertController.create({
      subHeader: "Enter the ppening stock to change  in"+item.uom,
      header: "This option is to change the  stock of "+item.name,
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: item.stock,
          placeholder: "Enter the  stock that you want to change in "+item.uom,
        },
      ],
      buttons: [{
        text: 'Change',
        handler: data => {
          
          let diffrenceinStock = Number(data.input);
          let data1={
            stock:diffrenceinStock,
            originalStock:Number(data.input)
          }
          this.items[item.index].stock = Number(data.input);
          this.changeItemOpeningStock(item,Number(data.input))
         this.changeItemStockInFireBase(item,data1);
          this.items = JSON.parse(window.localStorage.getItem("items"))
          
          //window.localStorage.setItem('items', JSON.stringify(this.items));
         // console.log("Items"+JSON.parse(this.items))
          //this.addToFireBase();
        },
      },
      ]
    });
  // this.addToFireBase();
    await alert3.present();
  }

  stock_added:number;
  async addStock(item) {
    this.items.forEach((value, index) => {
      value.i = index;
   });
    const alert2 = await this.alertController.create({
      subHeader: "Enter the received stock in "+item.uom,
      header: "This option is for stock in for item "+item.name,
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the received stock in"+item.uom,
        },
      ],
      buttons: [{
        text: 'Add to Stock',
        handler: data => {
        this.items[item.index].stock = Number(this.items[item.index].stock) + Number(data.input);
        this.stock_added = Number(data.input);
        var currentDate = new Date();
        let data1={
          stock:this.stock_added,
          item:item.name,
          index:item.index,
          Date: this.datePipe.transform(new Date(),'dd/MM/yyyy') ,
          
        }
         this.checkForSynchronization(data1)
         {
          if(this.user.uType == 1 ||this.paid == 1)
        {
          //.log("user.paid is 1");
         
          this.addStockToFireBase(data1);
          this.addItemStockToFireBase(item,data1);
        }
        window.localStorage.setItem("items",JSON.stringify(this.items));
        
          }
        },
      },
      ]
    });
   // this.addToFireBase();
    await alert2.present();
  }
  checkForSynchronization(data)
  {
   return true;
 
  }

  addStockToFireBase(data)
  {
    console.log(JSON.stringify(data));
   // console.log("We are here"+JSON.parse(data))
   //var currentDate = new Date();
    //var futureDate = new Date(currentDate.getTime() - 60000);
    //var past = Date.now() - 60000;
 //   this.firestore.collection('')
// console.log("data is************"+JSON.stringify(data))
 
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
 //console.log("After data**********+++++++++++"+JSON.stringify(data))
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
  addToFireBase()
  {
    
    
    this.items = JSON.parse(window.localStorage.getItem('items'));
   // console.log(this.items);
   
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
   
  //  window.localStorage.setItem('items', JSON.stringify(this.items));
  if(this.paid == 1||this.user.uType==1)
    {
      
    this.firestore.collection('stores').doc(this.user.docID).update({
      items: this.items,
    });
  }
  //console.log("we are here in the");
  }
  getOwnerPlayerId()
  {
    this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {
      if (res == undefined) {

      }
      else {
        this.user.playerId = res.playerID;
        this.customers = res.customers;
    //    console.log(this.customers);
        this.items = res.items;
      //  console.log(this.items);
      alert("I am called");
        
        this.suppliers = res.suppliers;
        this.purchaseOrder = res.purchaseorder;
        console.log("PurchasseOrder"+this.purchaseOrder);
        window.localStorage.setItem("customers",JSON.stringify(this.customers))
        window.localStorage.setItem("items",JSON.stringify(this.items))
        window.localStorage.setItem("suppliers",JSON.stringify(this.suppliers))
        window.localStorage.setItem("purchaseOrders",JSON.stringify(this.purchaseOrder))

        window.localStorage.setItem("playerID",res.playerID);
        this.toShow = this.items;
        this.getInfo();
        
        window.localStorage.setItem('user',JSON.stringify(this.user));
        }

    })
   // this.utility.checkPaid();
  }
 

  findItemIndex(item) {
   
    for (var k = 0; k < this.items.length; k++) {
      if (item == this.items[k]) {
                return k;
      }
    }
  }
  basic:any;
  noofitems;
  showOption(item)
  {
    this.paid = window.localStorage.getItem('paid');
    this.basic = window.localStorage.getItem('basic');
    console.log("PAID VALUE"+this.paid);
    console.log("basic value****"+this.basic);
    if(this.user.uType == 1)
    {
      
      this.showOptionsforstaff(item);
      
    }else if(this.paid == 0&&this.basic == 0)
    {
      this.showOptionsforfree(item);
    }
    else if(this.paid == 1)
    {
     this.showOptions1(item);
    }
    else if(this.basic == 1&&this.paid == 0)
    {
      console.log("we are not here");
      this.showOptionforBasic(item);
    }
  
  }
 not_allowed;
 async showOptionsforstaff(item)
  {
    const actionSheet = await this.actionSheetController.create({
      header: item.name,
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [ {
        text: 'Stock In',
        handler: () => {
          this.addStock(item);
        }
      },{
        text: 'Stock Out/Sale',
        handler: () => {
          this.StockOut(item);
        }
      },
      {
        text: 'Change  Stock',
        handler: () => {
          this.
          changeStock(item);
        }
      },
      {
        text: 'Use purchase order to add stock',
        handler: () => {
          this.
          addStockWithPO(item);
        }
      },
      
      {
        text: 'Daily report',
        handler: () => {
          this.
          dailyreport(item);
        }
      },
      {
        text: 'Ledger report',
        handler: () => {
          this.
          showLedger(item);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'destructive',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
    actionSheet.onDidDismiss().then(() => {
      this.getInfo();
    })
  }

    async showOptions1(item) {
      const actionSheet = await this.actionSheetController.create({
        header: item.name,
        mode: 'ios',
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'Edit Product Specification',
            handler: () => {
              this.editProductSpecification(item);
            }
          },
        
         {
          text: 'Stock In',
          handler: () => {
            this.addStock(item);
          }
        },
        
        {
          text: 'Stock Out/Sale',
          handler: () => {
            this.StockOut(item);
          }}, {
            text: 'Use purchase order to add stock',
            handler: () => {
              this.
              addStockWithPO(item);
            }
         
        }, {
          text: 'Change  Stock',
          handler: () => {
            this.
            changeStock(item);
          }
        },{
          text: ']Ledger report',
          handler: () => {
            this.showLedger(item);
          }
        },
        
        {
          text: 'Daily report',
          handler: () => {
            this.dailyreport(item);
          } },
       
        {
          text: 'Generate PO Report',
          handler: () => {
            this.
            generateporeport(item);
          }
        },
          {
          text: 'Remove Item',
          handler: () => {
            this.
            removeItem(item);
          }
        },{
          text: 'Cancel',
          icon: 'close',
          role: 'destructive',
          handler: () => {
           ;
          }
        }]
      });
      await actionSheet.present();
      actionSheet.onDidDismiss().then(() => {
        this.getInfo(); 
      })
    
  }
  
  async showOptionforBasic(item) {
    const actionSheet = await this.actionSheetController.create({
      header: item.name,
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Edit Product Specification',
          handler: () => {
            this.editProductSpecification(item);
          }
        },{
          text: 'Stock Out/Sale',
          handler: () => {
            this.StockOut(item);
          }
        },
      
       {
        text: 'Stock In',
        handler: () => {
          this.addStock(item);
        }
      },
      {
        text: 'Use purchase order to add stock',
        handler: () => {
          this.
          addStockWithPO(item);
        }
      },
      {
        text: 'Change  Stock',
        handler: () => {
          this.
          changeStock(item);
        }
      },
      {
        text: 'Generate PO Report',
        handler: () => {
          this.
          generateporeport(item);
        }
      },
      {
        text: 'Remove Item',
        handler: () => {
          this.
          removeItem(item);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'destructive',
        handler: () => {
         ;
        }
      }]
    });
    await actionSheet.present();
    actionSheet.onDidDismiss().then(() => {
      this.getInfo(); 
    })
  }
  
  async showOptionsforfree(item) {
    const actionSheet = await this.actionSheetController.create({
      header: item.name,
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Edit Product Specification',
          handler: () => {
            this.editProductSpecification(item);
          }
        },
      
       {
        text: 'Stock In',
        handler: () => {
          this.addStock(item);
        }
      },{
          text: 'Stock Out/Sale',
          handler: () => {
            this.StockOut(item);
          }
        },
      {
        text: 'Change Stock',
        handler: () => {
          this.
          changeStock(item);
        }
      },
      {
        text: 'Remove Item',
        handler: () => {
          this.
          removeItem(item);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'destructive',
        handler: () => {
         ;
        }
      }]
    });
    await actionSheet.present();
    actionSheet.onDidDismiss().then(() => {
      this.getInfo(); 
    })
  }
  excelImport() {
    this.ModalPage = ExcelImportPage;
    this.openModal();
  }

  dailyreport(item)
  {
    window.localStorage.setItem("selecteditem",JSON.stringify(item));
    let date1 = this.datePipe.transform(new Date(),'dd/MM/yyyy');
    //let date2 = this.datePipe.transform(new Date(),'dd/MM/yyyy');

    let data=
{
    todate:date1,
    fromdate:date1,
}
window.localStorage.setItem("ledgerreportdates",JSON.stringify(data));
this.router.navigate(['ledgerreport']);
     }
  generateporeport(item)
  {
    this.checkPaid();
    if(this.basic==1)
    {

    window.localStorage.setItem("selecteditem",item.index);
    console.log("we ARE HERE")
    this.router.navigate(['po-report'])
    }else{
      this.router.navigate(['cart'])
    }
  }
  addOpeningandClosingStock(item)
  {
  

  }
  async editProductSpecification(item)
  {
    if(item.rPrice == 0)
    {
      item.rPrice = undefined;
    }
    if(item.pPrice == 0)
    {
      item.pPrice = undefined;
    }
   
    
    const alert3 = await this.alertController.create({
      subHeader: "Edit Product Specification(if you dont want to edit anything leave it blank) ",
      header: "This option is to edit product specification in the app.",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: item.rPrice,
          placeholder: "Enter the retail price here",
        },
        {
          name: 'input1',
          type: 'number',
          id: 'name',
          value: item.pPrice,
          placeholder: "Enter the purchase price here.",
        },
        {
          name: 'input4',
          type: 'number',
          id: 'name',
          value: item.gst,
          placeholder: "Enter the gst percentage",
        },
        {
          name: 'input2',
          type: 'text',
          id: 'name',
          value: item.uom,
          placeholder: "Enter the uom(unit of measurement)",
        },{
          name: 'input3',
          type: 'number',
          id: 'name',
          value: item.mquantity,
          placeholder: "Enter the minimum quantity below which you want to get notification",
        },
      ],
      buttons: [{
        text: 'Change Product Specs',
        handler: data => {
          
          
          let data1 = {
            rPrice:Number(data.input),
            pPrice:Number(data.input1),
            minimumquantity:Number(data.input3),
            uom:data.input2,
            gst:data.input4
          }    
        this.editProductSpecs(data1,item);
        },
      },
      ]
    });
   
    await alert3.present();
  

  }
  paid:any;
  async editProductSpecs(data,item)
  {
   this.items = JSON.parse(window.localStorage.getItem("items"))
   console.log(this.items);
   console.log(data.rPrice);
   console.log(data.pPrice);
   console.log(item.index)
   
   if(data.rPrice!=0)
   {
     this.items[item.index].rPrice = data.rPrice;
   }
   if(data.pPrice!=0)
   {
     this.items[item.index].pPrice = data.pPrice;
   }if(data.minimumquantity!=0)
   {
     this.items[item.index].mquantity = data.minimumquantity;
   }
   if(data.uom!='')
   {
     this.items[item.index].uom = data.uom;
   }
   if(data.gst!=0)
   {
     this.items[item.index].gst = data.gst;
   }
   window.localStorage.setItem('items', JSON.stringify(this.items));
   console.log("We are here");
   this.addToFireBase();
  }
  async showLedger(item)
  {
    if(this.paid == 1)
    {
    window.localStorage.setItem("selecteditem",JSON.stringify(item));
    this.router.navigate(['ledger-report-date-input'])
    }
    else{
      this.router.navigate(['cart'])
    }
   
  }
  async removeItem(item)
  {
      
       let ritem = new Array();
       this.items.forEach(element=>{
       console.log(element);
       if(element.index != item.index)
       {
   
          ritem.push(element);
       }



      

    })
    this.firestore.collection("stores").doc(this.user.docID).collection("items").doc(item.index.toString()).delete();
    this.items = ritem;
    window.localStorage.setItem('items', JSON.stringify(this.items));
    
    
    this.addToFireBase();
  }
  profit:any;
  revenue:any;
  gotoBsInfo()
  {
    this.router.navigate(['business-info'])
  }
  async StockOut(item)
  {
    this.profit = 0;
    this.revenue = 0;
    window.localStorage.setItem("selecteditem",item.index);
    const alert3 = await this.alertController.create({
      subHeader: "Enter the out stock quantity in "+item.uom,
      header: "This option is for stock out(sale) of the item "+item.name,
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the stock quantity here..",
        },
        {
          name: 'input1',
          type: 'text',
          id: 'name',
          value: name,
          placeholder: "Enter the customer name here..",
        },
        {
          name: 'input2',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the customer number here..",
        },
      ],
      buttons: [{
        text: 'Stock Out',
        handler: data => {
          console.log(item);
          this.items[item.index].stock = Number(this.items[item.index].stock) - Number(data.input);
          window.localStorage.setItem('items', JSON.stringify(this.items));
          this.stock_added = -Number(data.input);  
          let data1 = {
            stock:this.stock_added,
            customer_name:data.input1,
            customer_mno:Number(data.input2),
            iname:item.name,
            index:item.index,
            Date:this.datePipe.transform(new Date(),'dd/MM/yyyy'),
          }    
          this.profit = this.profit + (this.items[item.index].rPrice - this.items[item.index].pPrice)*Number(data.input);
          this.revenue = this.revenue + (this.items[item.index].rPrice*Number(data.input));
          console.log("Profit"+this.profit);
          console.log("Revenue"+this.revenue)
          this.updateDailySalesandProfit(this.revenue,this.profit)
          if(this.user.uType == 1 || this.paid == 1)
          { 
            this.sendNotificationcheck(item);
              
          
           this.addStockToFireBase(data1);
           this.addItemStockToFireBase(item,data1);
          }
        },
      },
      ]
    });
   
    await alert3.present();
  
  }
  changeItemStockInFireBase(item,data)
  {
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).get().subscribe(data2 => {
      if (data2.exists) {
        this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).update({
          stock:data.stock,
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
          //this.salesToBeUpload.push(data);
         //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      } else {
        this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).set({
          stock:data.stock,
       
         
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
       //   this.salesToBeUpload.push(data);
         // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      }
     
     
    
  })
  }
  addItemStockToFireBase(item,data)
  {
    if(this.paid == 1)
    {
  //  console.log("we are called");
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
          stock:item.stock,
       
         
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
       //   this.salesToBeUpload.push(data);
         // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      }
     
     
    
  })

  this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).valueChanges().subscribe((res:any)=>
  {

    if(res==undefined)
    {

    }else
    {
      this.items[item.index].stock = res.stock;
     
      window.localStorage.setItem('items',JSON.stringify(this.items));
      this.addToFireBase();
    }
  })
}
//window.localStorage.setItem('items',JSON.stringify(this.items));
  //console.log("ITEMA")
  //window.localStorage.setItem('items',JSON.stringify(this.items));
 // this.addToFireBase();
 this.items = JSON.parse(window.localStorage.getItem('items'));

  }
  addItemStockToFireBase1(item,data)
  {
    console.log("we are called");
    console.log(data.stock+"data stock")
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
          stock:Number(item.stock)+(data.stock),
       
         
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
       //   this.salesToBeUpload.push(data);
         // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      }
     
     
    
  })

  this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(item.index.toString()).valueChanges().subscribe((res:any)=>
  {

    if(res==undefined)
    {

    }else
    {
      this.items[item.index].stock = res.stock;
     
      window.localStorage.setItem('items',JSON.stringify(this.items));
      this.addToFireBase();
    }
  })
  this.items = JSON.parse(window.localStorage.getItem('items'))
 

  }
  sendNotificationcheck(item)
  {
    this.items = JSON.parse(window.localStorage.getItem('items'));
    if(this.items[item.index].stock<this.items[item.index].mquantity)
    {
      this.sendNotification("Low Stock Notification:Item "+this.items[item.index].name+"is low stock.")
    }
  }
  changeItemOpeningStock(item,stock){
   this.items[item.index].stock = stock;
   console.log("stock"+this.items[item.index].stock)
   window.localStorage.setItem("items",JSON.stringify(this.items))
   this.addToFireBase();

  }
  updateDailySalesandProfit(revenue,profit)
  {
    console.log("*********revenue********"+revenue);
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

  async addStockWithPO(item) {
    //this.checkPaid();
    this.items.forEach((value, index) => {
      value.i = index;
   });
   window.localStorage.setItem("selecteditem",item.index);
    const alert2 = await this.alertController.create({
      subHeader: "Enter the received stock quantity in "+item.uom,
      header: "This option is for the stock in associated with purchase order",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Enter the received stock quantity here..",
        },
      ],
      buttons: [{
        text: 'Add to Stock',
        handler: data => {
          this.items[item.index].stock = Number(this.items[item.index].stock) + Number(data.input);
          window.localStorage.setItem('items', JSON.stringify(this.items));
          let data1={
            stock:Number(data.input),
            item:item.name,
            index:item.index,
            Date: this.datePipe.transform(new Date(),'dd/MM/yyyy') ,
            supplier_name:this.selectedpurchaseorder.supplier.name
            
          }
          
            window.localStorage.setItem('items', JSON.stringify(this.items));
            
            this.addItemStockToFireBase(item,data1);
            this.completePurchaseOrder(data.input); 
            this.addStockToFireBase(data1);
            }
          
        },
        ]
      });
     // this.
         
          
    this.addpurchaseorder(item);
   // this.addToFireBase();
    await alert2.present();
    
  }
  completePurchaseOrder(stock)
{
  console.log("IN COMPLETE PURCHASE ORDER***************")
  let item;
  let pendingpurchaseorders = new Array;
  
  let completedpurchaseorder = this.selectedpurchaseorder;
  this.purchaseOrder =  JSON.parse(window.localStorage.getItem('purchaseorder'));  
  this.purchaseOrder.forEach(function(value)
 {
   
   console.log("VALUE.STOCK"+value.stock);
   if(value.stock == completedpurchaseorder.stock&&value.item_index == completedpurchaseorder.item_index&&value.supplier.phone == completedpurchaseorder.supplier.phone)
   {
    completedpurchaseorder = value;
    

   }else{
  pendingpurchaseorders.push(value);
   }
 })
 
completedpurchaseorder.stock_received = stock;


completedpurchaseorder.stock_missed = Number(completedpurchaseorder.stock) - Number(stock);
if(completedpurchaseorder.stock_missed > 0)
{
  completedpurchaseorder.stock = completedpurchaseorder.stock_missed;
  pendingpurchaseorders.push(completedpurchaseorder);
}

window.localStorage.setItem("purchaseOrders",JSON.stringify(pendingpurchaseorders));
console.log("PEnding Purchase orders"+JSON.stringify(pendingpurchaseorders))
if(this.paid == 1||this.user.uType == 1)
{
  console.log("We are in the adding purchaseorders")
this.firestore.collection('stores').doc(this.user.docID).update({
  purchaseorder: pendingpurchaseorders,
})

var name = "CompletePO";
const sub = this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").get().subscribe(data2 => {
  if (data2.exists) {
    this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").update({
      completedPO: firebase.firestore.FieldValue.arrayUnion( completedpurchaseorder)
    }).then(data2 => console.log('data2')).catch((err) => {
      console.log(err);
      //this.salesToBeUpload.push(data);
     //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
      sub.unsubscribe();
    }
    )
  } else {
    this.firestore.collection('stores').doc(this.user.docID).collection('completedPO').doc("completedPO").set({
      completedPO: firebase.firestore.FieldValue.arrayUnion (completedpurchaseorder)
    }).then(data2 => console.log('data2')).catch((err) => {
      console.log(err);
   //   this.salesToBeUpload.push(data);
     // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
      sub.unsubscribe();
    }
    )
  }

 
 

})




console.log("PENDING PURCHASE ORDERS LENGTH"+pendingpurchaseorders.length);
}
window.localStorage.setItem("purchaseorder",JSON.stringify(pendingpurchaseorders));
if(completedpurchaseorder.stock_missed<=0)
{
  this.msg = "All stock received";
this.color = "success";
this.presentToast();

}
if(completedpurchaseorder.stock_missed > 0)
{
  console.log("completedpurchaseorder"+completedpurchaseorder);
  completedpurchaseorder.stock = completedpurchaseorder.stock_missed;
  console.log("completed stock"+completedpurchaseorder.stock)
  pendingpurchaseorders.push(completedpurchaseorder);
  this.msg = completedpurchaseorder.stock_missed+ "pieces  left to be received";
this.color = "danger";
this.presentToast();
}
}
  
  
barcode:string;
async scanBarcodes()
{
  //console.log("about to call native method");
  
  await this.barcodeScanner.scan().then(barcodeData => {
    var barcode = barcodeData.text;
    this.barcode = barcode;
    return barcode;
  })

}
searchItemUsingBarcode() {
  this.searchFound = [];
  var found = 0;
  console.log(this.searchParam);
  if (this.searchParam != "") {
    for (var k = 0; k < this.items.length; k++) {
     
      if (this.items[k].barcode==this.searchParam) {
       // alert("ITem found"+this.items[k].name);
        
                  this.searchFound.push(this.items[k]);
         
         
      }
            
    }
  }
  this.toShow = this.searchFound
this.items = this.toShow 
  
}


  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      var barcode = barcodeData.text;
      var found = false;
      for (var i = 0; i < this.items.length; i++) {
        if (barcode == this.items[i].barcode) {
          this.searchParam = barcode;
          this.barcode = barcode;
        
         this.searchItemUsingBarcode();
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
     
    });
  }
  async generatePurchaseOrder(item)
  {
    this.checkPaid()
    console.log(this.user);
    var purchaseOrder = { 
      supplier:{name:"",phonenumber:""}, 
      stock:0,
      item_index:0,
      item_name:String,
      PDate:new Date(),
      uom:String,
   };  window.localStorage.setItem('items', JSON.stringify(this.items));
    const alert2 = await this.alertController.create({
      subHeader: "Enter the ordered item quantity in "+item.uom,
      header: "THis is to generate purchase order with supplier",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: name,
          placeholder: "Please enter ordered stock here",
        }
      ],
      buttons: [{
        text: 'Generate PO',
        handler: data => {
         purchaseOrder.supplier = this.supplier;
         purchaseOrder.stock = data.input;
         purchaseOrder.item_index = item.index;
         purchaseOrder.item_name = item.name;
         purchaseOrder.PDate = new Date();
         purchaseOrder.uom = item.uom;
         if(this.paid == 1&&this.user.uType==1)
         {

        this.addPurchaseOrdertoFireBase(purchaseOrder,item);
         }
        }
      },
      ]
    });
    this.addSupplier(item);
    
    
    await alert2.present();
  }
  addPurchaseOrdertoFireBase(purchaseOrder,item)
{
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
}

searchItem() {
  this.searchFound = [];
  var found = 0;
  console.log(this.searchParam);
  if (this.searchParam != "") {
    for (var k = 0; k < this.items.length; k++) {
      if (this.items[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
        found = found + 1;
        if (found < 8) {
          this.searchFound.push(this.items[k]);
          this.searchFound[this.searchFound.length - 1].index = k;
        } else break
      }
            
    }
  }

  this.toShow = this.searchFound
  if(this.searchParam == "")
  {
    this.toShow = this.items;
  }

}
  call(boi) {
    this.callNumber.callNumber(boi.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  registerBarcode(item)
  {
   

    
    this.barcodeScanner.scan().then(barcodeData => {
  
  
if(barcodeData.text != undefined)
{
  
  this.barcode = barcodeData.text;
  
  let same = false;
  
  this.items[item.index].barcode = this.barcode;
        //console.log(this.items[item.index]);
       //console.log(this.items);
      window.localStorage.setItem('items', JSON.stringify(this.items));
  
      this.addToFireBase();
  }

     })
    
   
    //console.log("we are here");
   // console.log(this.items[item.index]);

    

  }
  allowed = false;

  getInfo() {
    this.toCollect = 0;
    this.lowStock = 0;
    this.highStock = 0;
    this.stockValue = 0;
    this.noofitems = this.items.length;
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

  sortLowStock() {
    this.toShow.sort((a, b) => (a.stock > b.stock) ? 1 : ((b.stock > a.stock) ? -1 : 0));
  }

  sortAlpha() {
    this.toShow.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  sortPriceDown() {
    this.toShow.sort((a, b) => (a.rPrice > b.rPrice) ? 1 : ((b.rPrice > a.rPrice) ? -1 : 0));
  }

  sortPriceUp() {
    this.toShow.sort((a, b) => (a.rPrice < b.rPrice) ? 1 : ((b.rPrice < a.rPrice) ? -1 : 0));
  }

  storeInfo: any;
  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('lenders')) {
      this.lenders = JSON.parse(window.localStorage.getItem('lenders'));
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
  helpers:any;
  
  ionViewWillEnter() {
    this.paid = JSON.parse(window.localStorage.getItem('paid'))
    this.basic = JSON.parse(window.localStorage.getItem('basic'))
  // console.log("PAID VALUE"+this.paid);
   console.log(this.paid);
    this.user = JSON.parse(window.localStorage.getItem('user'))
    //console.log(this.user.uType)
   // this.utility.selfExpireStaff();
    
    //this.utility.checkPaid();
    //this.utility.checkForBasicService();
    
    
    //this.deleteStaffandDesktopData();
    if(this.paid == 1)
    {
    this.getOwnerPlayerId();
    this.paid = window.localStorage.getItem('paid')
    console.log("PAID*******+++++++"+this.paid);
   
    }    
     if(this.user.uType == 1)
    {
  
      this.checkIfHelperExists();
      
    }

    this.items = JSON.parse(window.localStorage.getItem('items'))
    //console.log(JSON.stringify(this.it
    this.noofitems=this.items.length
   // this.getInfo();
    //console.log(this.items);
    this.toShow = this.items;
 
 
   // this.getcurentUsershop();
   this.getItems();

   this.searchFound = this.items;
   this.toShow = this.items;
  // console.log(this.items);

   //this.toShow = this.items;
   this.user = JSON.parse(window.localStorage.getItem('user'))
  }
  

 
  
  user: any;
  openPOS()
  {
    this.router.navigate(['pos']);
  }
  getcurentUsershop() {
   
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
   
    if(this.user.paid == 1)
    {

   this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res: any) => {
     
      if (res.items) {
        
          this.items = res.items
          window.localStorage.setItem('items', JSON.stringify(this.items));
          this.items = JSON.parse(window.localStorage.getItem('items'));
        
        
      }
      if (res.purchaseorder) {
       
                
          this.purchaseOrder = res.purchaseorder
          window.localStorage.setItem('purchaseOrders', JSON.stringify(this.purchaseOrder));
          this.purchaseOrder = JSON.parse(window.localStorage.getItem('purchaseOrders'));
       
        
      }
    

    })
    }
  }
  checkPaid()
  {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res:any)=>
    {
     
      this.user.paid = res.paid;
      this.user.basic = res.basic;
      console.log("We are here");
    }
    )
    if(this.paid == 1)
    
    {
      this.user.basic = 1
    }
    window.localStorage.setItem('user',JSON.stringify(this.user))
  }
 checkIfHelperExists()
 {
   console.log("HelperId"+this.user.helperid)
  var docRef = this.firestore.collection("helpers").doc(this.user.helperid);
  docRef.valueChanges().subscribe((
    ref
  )=>
  {
    console.log("ref************"+ref);
   if(ref == null)
   {
    console.log("We are here");
     window.localStorage.clear();
     navigator['app'].exitApp();
     
   }
   else
   {
    this.allowed = true;

   }
  })

 }

}
