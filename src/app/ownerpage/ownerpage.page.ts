import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {OneSignal} from '@ionic-native/onesignal/ngx'
import { WindowserviceService } from '../windowservice.service';





@Component({
  selector: 'app-ownerpage',
  templateUrl: './ownerpage.page.html',
  styleUrls: ['./ownerpage.page.scss'],
})
export class OwnerpagePage implements OnInit {

  constructor(
    private iap: InAppPurchase,
    public firestore: AngularFirestore,
    private router: Router,
    private auth: AngularFireAuth,
    private oneSignal:OneSignal,
  ) { }

  userTyp: string[] = ["Trial", "Paid"]
  newShop: boolean = true;
  selectedPlan: string = "Trial";
  name: string="sample";
  address: string = "sample";
  referal: string = "";
  user: any;
  playerID:string;
  items:any[]
  staff :any[]
  suppliers:any[]
  bname:string
  storeInfo:any
  mno:any;
  ngOnInit() {
    
  }
  fetchData()
  {
    this.user = []
    const num = '+91'+this.mno;
    const sub = this.firestore
    
      .collection("stores", (q) => q.where("owner", "==", num))
      .valueChanges()
      .subscribe((r: any) => {
        console.log(r);
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.user.uType = 'Owner'
        window.localStorage.setItem('user',JSON.stringify(this.user))
        console.log(this.user.email)
       if(r[0].desktopemail == this.user.email)
       {
          window.localStorage.setItem('storeInfo', JSON.stringify(r[0]));
          this.user.docID = r[0].docID;
          this.user.paid = r[0].paid;
          window.localStorage.setItem("endDate",r[0].endDate);
          window.localStorage.setItem("paid","1");
          window.localStorage.setItem("basic","1");
          this.user.playerID = window.localStorage.getItem('playerID')
          console.log(r[0])
          this.items = r[0].items;
          this.staff = r[0].helper;
          this.suppliers = r[0].suppliers;
          //console.log(this.staff);
          //console.log(this.staff != undefined)
          console.log(this.user);
          window.localStorage.setItem('user', JSON.stringify(this.user));
          if(this.items != undefined)
          {window.localStorage.setItem('items',JSON.stringify(this.items));}
          
          if(this.staff != undefined)
          {window.localStorage.setItem('helpers',JSON.stringify(this.staff));}
          if(this.suppliers != undefined)
          {window.localStorage.setItem('suppliers',JSON.stringify(this.suppliers));
        }
          
          
          
          


          this.router.navigate(['home/dashboard']);
          sub.unsubscribe();
       }
       else{
         this.router.navigate(['not-authorized'])
       }
      })
      
  }

  startTrial() {
    var myCurrentDate = new Date();
    var expiry = new Date(myCurrentDate);
    expiry.setDate(expiry.getDate() + 15);
    var owner = this.auth.auth.currentUser.phoneNumber;
    

    console.log("PlayerId"+this.user.playerId)
      const data = {
       
        referal: this.referal,
        selectedPlan: "",
        expiry: "",
        creationTime: new Date(),
        owner,
        paid:0,
        maxStockIndex:0,
        playerID:this.user.playerId     //  playerId:this.playerID
      }
      this.firestore.collection('stores').add(data).then((data2) => {
        window.localStorage.setItem('storeInfo', JSON.stringify(data));
        console.log(data2.id);
       
        this.user.docID = data2.id;
        const docID = data2.id;
        this.firestore.collection('stores').doc(data2.id).update({ docID });
        window.localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['home/dashboard']);
      }).catch(err => alert(err.message))
    
   
  }
  getplayerID() {
    console.log("getplayerId() called")

    alert("we are in the getplayerid()  method")
    this.oneSignal.getIds().then(identity => {
    const deviceID = identity.userId;
    alert("Unique Id for device is "+deviceID);
    this.playerID = deviceID;
    this.auth.authState.subscribe(user => {
    //this.userID = user.uid;
    this.firestore.collection('users').doc(user.uid).update({
    deviceID
    }).then(() => {
    console.log('player id got and updated')
    }).catch(err => {
      alert(err);
    console.log('unable to get id');
    
    this.getplayerID()
    })
    })
    
    })
    
    
    }
  paymentProceed() {
    this.iap
      .getProducts(['prod1', 'prod2'])
      .then((products) => {
        console.log(products);
        //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
      })
      .catch((err) => {
        alert(err.message);
      });


    this.iap
      .buy('prod1')
      .then((data) => {
        console.log(data);
        // {
        //   transactionId: ...
        //   receipt: ...
        //   signature: ...
        // }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

}
