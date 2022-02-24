import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityMethodsService {
  paid:any;
  user:any;
  basic:any;

  constructor(private router:Router,private firestore:AngularFirestore,private auth:AngularFireAuth) { }
  checkPaid()
  {
   // alert(this.cart.checkSubscribe());
    this.user = JSON.parse(window.localStorage.getItem('user'))
    console.log(this.user);
    //console.log(this.user.uType);
    this.endDate= window.localStorage.getItem("endDate");
    let endDates = new Date(this.endDate);
    this.firestore.collection('stores').doc(this.user.docID).valueChanges().subscribe((res:any)=>{
     
      if(res.desktopemail != this.user.email)
      {
        console.log("We are inside");
        window.localStorage.clear();
        this.router.navigate(['login']);
      }
    })
    if(this.compareDates(endDates,new Date())<0)
    {
     window.localStorage.clear();
     this.firestore.collection("stores").doc(this.user.docID).update({
       desktopemail:''
     })
     this.router.navigate(['login']);
    }
    
   
   
  }
  enddate;
  checkForBasicService()
  {
   // this.user = JSON.parse(window.localStorage.getItem('user'))
   // console.log(this.user);
    //this.firestore.collection("stores").doc(this.user.docID).valueChanges().subscribe((res:any)=>{
     // this.basic = res.basic;
    //})
    //if(this.basic==1)
    //{window.localStorage.setItem("basic","1")}
    //else{
      //window.localStorage.setItem("basic","0")
    //}
   
    
  }
  public  compareDates(date1: Date, date2: Date): number
  {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    let d1 = date1; let d2 = date2;
  
    // Check if the dates are equal
   
    // Check if the first is greater than second
    if (d1 > d2) return 1;
   
    // Check if the first is less than second
    if (d1 < d2) return -1;
  }
  
  endDate:any;
 
}
