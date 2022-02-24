import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-email-id-creation',
  templateUrl: './email-id-creation.page.html',
  styleUrls: ['./email-id-creation.page.scss'],
})
export class EmailIdCreationPage implements OnInit {
  ionViewWillEnter() {
    this.paid = window.localStorage.getItem("paid");
  }

  updateEmailId()
  {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    this.firestore.collection("stores").doc(this.user.docID).update({
      desktopemail:this.email
    })
    this.router.navigate(['home/settings'])

  }
  email:any;
  close() {
    this.router.navigate(['home/settings'])
  }
  user:any;

  constructor(private router:Router,public firestore: AngularFirestore, 
    ) { }
    paid:any;

  ngOnInit() {
    this.paid = window.localStorage.getItem("paid");
    this.user = JSON.parse(window.localStorage.getItem('user'))
    if(this.paid== 0)
    {
      this.router.navigate(['cart-home/cart-premium'])
    }
  }

}
