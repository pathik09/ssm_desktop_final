import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { DatePipe } from '@angular/common';
import { ElementArrayFinder } from 'protractor';


@Component({
  selector: 'app-ledgerreport',
  templateUrl: './ledgerreport.page.html',
  styleUrls: ['./ledgerreport.page.scss'],
})
export class LedgerreportPage implements OnInit {
  stockinout : any;
  user:any;
  intendedsio:any;
  stockin:any;
   OpeningStock;
   closingStock;
   selecteditem:any;
   changed:any;
   changedelement:any;
   item_name:any;
  constructor(   public dataPipee:DatePipe,public alertController: AlertController,private router: Router, public firestore: AngularFirestore,) { }
  calculateVariables()
  {
    
    
     this.intendedsio = [];
     this.selecteditem = JSON.parse(window.localStorage.getItem('selecteditem'));
     
    this.items = JSON.parse(window.localStorage.getItem('items'))
   // console.log(this.items);
    this.user = JSON.parse(window.localStorage.getItem("user"));
    this.stockinout = [];
    let data = JSON.parse(window.localStorage.getItem('ledgerreportdates'));
    let fromdate = data.fromdate;
    let todate = data.todate;
    let item = JSON.parse(window.localStorage.getItem("selecteditem"))
    this.OpeningStock = item.stock;
    this.item_name = item.name
    
  
    this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(item.index.toString()).valueChanges().subscribe((res:any)=>{
              if (res == undefined) {
  
        }
        else {

         let firsttime = true;
         let firsttimes = true; 
         var selected = false;
         
         this.OpeningStock = item.stock;
         this.stockinout = res.stock_added;
       // console.log("this.stockinoutentry"+this.stockinout.length)
         
         
         this.intendedsio = [];
         this.stockin = [];
         this.items = JSON.parse(window.localStorage.getItem('items'))
   //      console.log(this.items[this.selecteditem.index].stock); 
     //    console.log(item.stock);    
         this.OpeningStock = this.items[this.selecteditem.index].stock;
                 this.closingStock = 0;
       //  console.log(this.OpeningStock);
         firsttime = true;
          firsttimes = true; 
          selected = false;
//          console.log("******We are here*********"+this.OpeningStock)
  //        console.log("*********((((((((()))))))))&&&&&&&&&"+this.stockinout.length);
        for(let i = 0;i<this.stockinout.length;i++)
          {
         // console.log("I am called");
    //     console.log("we are calling*******************caclulateVariables()"+JSON.stringify(this.selecteditem))
          let selectedindex = this.selecteditem.index;
        //  console.log("******selecredindex&&&&&&"+selectedindex)
          let fromDate = data.fromdate;
          let toDate = data.todate;
          
          //console.log(fromDate);
          let currentsio = this.stockinout[i];
          currentsio.amount = currentsio.stock * this.selecteditem.rPrice;
          currentsio.purchaseprice = currentsio.stock * this.selecteditem.pPrice;
          currentsio.amount = Math.abs( currentsio.amount)
          
         // this.item_name = this.stockinout[i].item;
         
          
         // console.log("******selecredindex&&&&&&"+selectedindex)
          //console.log(currentsio.index==selectedindex)
          
          if(currentsio.index == selectedindex)
          {
            
           //console.log("***********currentsio***********"+JSON.stringify(currentsio));
         
            if(currentsio.Date>=toDate&&currentsio.Date<=fromDate){
              
             // console.log("We are here********(((((((()))))))))") 
              
              if(currentsio.stock>0)
              {
               // console.log("*******We are in the stock in")
                currentsio.outentry = "Stock In";
                this.intendedsio.push(currentsio);
                //console.log("*******+++++++++"+this.intendedsio.length)
              }
              if(currentsio.stock<0)
              {
                //console.log("*******?????????********"+JSON.stringify(currentsio))
                this.stockin.push(currentsio);
               
                currentsio.outentry = "Stock Out";
                currentsio.stock = currentsio.stock - currentsio.stock - currentsio.stock;
              }
            
              
          }
          }
          
      }
      
      }
      for(let i = 0;i<this.stockinout.length;i++)
      {
       let currentsio = this.stockinout[i];
       
      
        if(currentsio.index == undefined)
        {
      
          console.log("Our Entry"+currentsio.outentry);
          console.log("Currentsio.outentry == Stock In"+currentsio.outentry == "Stock In")
          if(currentsio.outentry == "Stock In")
          {
            console.log(this.intendedsio.length);
            for(let j = 0;j<this.intendedsio.length;j++)
            {
              if(this.intendedsio[j].maxStockAdded == currentsio.maxStockAdded)
              {
                let modifiedsio
                modifiedsio = this.intendedsio[j]
                modifiedsio.returnedquantity = currentsio.stock;
                modifiedsio.returneddate = currentsio.Date;
                modifiedsio.returnedamount = currentsio.stock * this.selecteditem.pPrice;
                modifiedsio.returned = true;
                console.log("Modified Sio"+JSON.stringify(modifiedsio))
                
                this.intendedsio[j] = modifiedsio 
                console.log(JSON.stringify(this.intendedsio[j]))
              }
            }
            
          }
          else if(currentsio.outentry == "Stock Out")
          {
            for(let j = 0;j<this.stockin.length;j++)
            {
              
              if(this.stockin[j].maxStockAdded == currentsio.maxStockAdded)
              {
                let modifiedsio
                modifiedsio = this.stockin[j]
                modifiedsio.returnedquantity = currentsio.stock;
                modifiedsio.returneddate = currentsio.Date;
                modifiedsio.returnedamount = currentsio.stock * this.selecteditem.rPrice;
                modifiedsio.returned = true;
                
               // delete this.stockin[j]
                console.log("Modified Sio"+JSON.stringify(modifiedsio))
                this.stockin[j] = modifiedsio
              }
            }
            

          }

        }
      }
  
       })
    
  
  }
  changeOpeningStock(data)
  {
  let changeinQuantity = data.stock - data.openingStock;
  
  let data1={
    stock:changeinQuantity
  }
  this.addItemStockToFireBase(this.selecteditem,data1);
 // this.calculateVariables();
  }
  ionViewWillEnter()
  {
    
    this.calculateVariables();
  }
  addItemStockToFireBase(item,data)
  {
    console.log("*********We are in additemstock to data+++++++++++"+JSON.stringify(data));
    if(data.outentry=="Stock In")
    {
      
      data.stock = data.stock - data.stock - data.stock;
    }//console.log("we are called");
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).get().subscribe(data2 => {
      
      if (data2.exists) {
        
         this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).update({
          stock: firebase.firestore.FieldValue.increment(data.stock),
          
        }).then(data2 => console.log('data2')).catch((err) => {
          //console.log(err);
          //this.salesToBeUpload.push(data);
         //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
       
      } else {
        this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).set({
          stock:item.stock + data.stock
          
         }).then(data2 => console.log('data2')).catch((err) => {
           console.log(err);
        //   this.salesToBeUpload.push(data);
          // window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
           sub.unsubscribe();
         }
         )
        
      }
     
     
    
  })
  this.items = JSON.parse(window.localStorage.getItem('items'))
  this.firestore.collection('stores').doc(this.user.docID).collection('items').doc(this.selecteditem.index.toString()).valueChanges().subscribe((res:any)=>
  {

    if(res==undefined)
    {

    }else
    {
      this.items[this.selecteditem.index].stock = res.stock;
      console.log("***************"+res.stock);
      window.localStorage.setItem('items',JSON.stringify(this.items));
  this.addToFireBase();
  
 // window.localStorage.setItem('items',JSON.stringify(this.items));
  
// this.calculateVariables();
    }
  })
 
this.calculateVariables();
  }
  items:any;
  stock_added:any;
  quantity_changed;
  async edit(stockinoutentry) {
    //console.log(stockinoutentry);
    console.log(stockinoutentry);
    var pstock = stockinoutentry.stock;
    
    const alert2 = await this.alertController.create({
      subHeader: "Please enter the stock quantity returned.  ",
      header: "This option is for the return of the  stock entry in the "+stockinoutentry.outentry+".",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: stockinoutentry.stock,
          placeholder: "Enter the return quantity",
        },
      ],
      buttons: [{
        text: 'Return items',
        handler: data => {
          if(Number(data.input > stockinoutentry.stock))
          {
            alert("returned quantity cannot exceed the original entity")
          }
          else
          {
          this.quantity_changed = Number(data.input);
          var currentDate = new Date();
                 let data1={
            stock:this.quantity_changed,
            pstock:pstock,
            reason:"Returned/returning",
            Date:this.dataPipee.transform(new Date(),"dd/MM/yyyy"),
            maxStockAdded:stockinoutentry.maxStockAdded,
            
          
           
            outentry:stockinoutentry.outentry
          }
          this.makechangestofirestore(data1); 
         
      
        }
        },
      },
      ],
    });

    alert2.present();
  }
  updateFirebase(stockinoutentry)
  {
    this.firestore.collection("stores").doc
  }
  addToFireBase()
  {
    
    
    //this.items = JSON.parse(window.localStorage.getItem('items'));
    
   
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
   
  //  window.localStorage.setItem('items', JSON.stringify(this.items));
   
  if(this.user.paid==1)
    {
      
    this.firestore.collection('stores').doc(this.user.docID).update({
      items: this.items,
    });
  }
  console.log("we are here in the");
  }
  makechangestofirestore(data1)
  {
   // data1.maxStockAdded = data1.stockinoutentry.maxStockAdded;
    const sub = this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(this.selecteditem.index.toString()).get().subscribe(data2 => {
      if (data2.exists) {
        
        this.firestore.collection('stores').doc(this.user.docID).collection('stock_added').doc(this.selecteditem.index.toString()).update({
          
          stock_added: firebase.firestore.FieldValue.arrayUnion( data1)
        }).then(data2 => console.log('data2')).catch((err) => {
          console.log(err);
          //this.salesToBeUpload.push(data);
         //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
          sub.unsubscribe();
        }
        )
      } 
      this.addItemStockToFireBase(data1,data1);
     
    
  })
  //console.log()

  

  

     
    this.intendedsio = [];
   // this.calculateVariables();

  }
  async updateOpeningStock(openingStock)
  {
    const alert3 = await this.alertController.create({
      subHeader: "Please enter the stock entity to change. Previous value was  "+this.OpeningStock,
      header: "This option is to update the stock entry in the "+this.OpeningStock+".",
      mode: 'ios',
      inputs: [
        {
          name: 'input',
          type: 'number',
          id: 'name',
          value: openingStock,
          placeholder: "Change the quantity in this entry.",
        },
      ],
      buttons: [{
        text: 'Change the entry',
        handler: data => {
        
        this.quantity_changed = Number(data.input);
        var currentDate = new Date();
               let data1={
          stock:this.quantity_changed,
          openingStock:openingStock
                
                  }
                  console.log(data1);
        this.changeOpeningStock(data1); 
       
        },
      },
      ],
    });
    alert3.present();
  }
  close()
  {
    this.router.navigate(['home/inventory'])
  }


  ngOnInit() {
  }

}
