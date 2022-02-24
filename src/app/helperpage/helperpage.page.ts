import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-helperpage',
  templateUrl: './helperpage.page.html',
  styleUrls: ['./helperpage.page.scss'],
})
export class HelperpagePage implements OnInit {
 

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toast: ToastController,
    private loading: LoadingController,

  ) {
    
    this.currentDiv = 'one'
    
  }
  loadermsg: string;
  loaderID: string;
  userID: string;
  user: any;
  msg: string;
  color: string;
  currentDiv: string;

  async presentToast() {
    const toast = await this.toast.create({
      message: this.msg,
      duration: 800,
      mode: 'ios',
      color: this.color,
      position: 'top',
    });
    toast.present();
  }


  //loading
  async presentLoading() {
    const loading = await this.loading.create({
      message: this.loadermsg,
      spinner: 'dots',
      id: this.loaderID,
      mode: 'ios',
    });
    await loading.present();
  }

  changeDiv(name: string) {
    this.currentDiv = name;
  }

  checkRequestsSent(userID: string) {
    this.firestore.collection('helpers').doc(userID).valueChanges().subscribe((data: any) => {
      console.log('just to chekc', data);

      if (data == undefined) {
        console.log('no user found on firebase');
        this.loading.dismiss('load')
      }
      else if (data.requestStatus) {
        if (data.requestStatus == 'pending') {

          this.currentDiv = 'two'
          console.log('request sent and is pending');
          this.loading.dismiss('load')

        }
        else if (data.requestStatus == 'recieved') {
          this.currentDiv = 'three'
          this.loading.dismiss('load')

        }
        else if (data.requestStatus == 'approved') {
          this.loading.dismiss('load')
          this.acceptReq();
          this.router.navigate(['/home/inventory'])
        }
      }
      else {

        console.log('na request sent na recienved');
        this.currentDiv = 'one'
        this.loading.dismiss('load')
      }
    })
  }
  code: number=91;


  withdrawRequest() {
    const requestStatus = ''
    
    this.firestore.collection('helpers').doc(this.userID).update({
      requestStatus,
    }).then(() => {
      this.msg = 'request removed'
      this.presentToast()
    })
  }

  acceptReq() {
   
    const uid = this.auth.auth.currentUser.uid
    this.firestore.collection('helpers').doc(uid).get().subscribe((u: any) => {
      console.log(u);
      if (u.exists) {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        this.user.docID = u.Df.sn.proto.mapValue.fields.docID.stringValue
        this.user.uType=1;
        this.user.helperid = this.userID
        this.user.helpephone = this.phone
        

        window.localStorage.setItem('user', JSON.stringify(this.user));
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user);

        // 
      }
    })
    // const requestStatus = 'approved'
    // this.firestore.collection('helpers').doc(this.userID).update({
    //   requestStatus,
    // }).then(() => {

    //   this.msg = 'request accepted'
    //   this.presentToast()
    //   this.router.navigate(['pos'])
    // })
  }

  phone: number;

  sendRequest() {

    if (!this.phone || !this.code) {   

      this.msg = 'Phone number is blank'
      this.presentToast()
    }
    else {
      const ownerPhone = '+' + this.code + this.phone;
      const requestStatus = 'pending'
      this.firestore.collection('helpers').doc(this.userID).update({
        ownerPhone,
        requestStatus,
      }).then(() => {

        this.msg = 'request to shopOwner'
        this.presentToast()
        this.checkRequestsSent(this.userID)
      }).catch(err => {

        this.msg = JSON.stringify(err.message)
        this.presentToast()
      })

    }
  }

  getuserdata(uid) {
    this.firestore.collection('helpers').doc(uid).valueChanges().subscribe((res: any) => {
      if (res == undefined) {

      }
      else if (res.docID) {
        this.user.docID = res.docID
        this.user.paid = 1;
        window.localStorage.setItem('user', JSON.stringify(this.user));
      }
    })
  }

  ngOnInit() {

    this.loaderID = 'load'
    this.loadermsg = 'HOLD ON A MOMENT..'
    this.presentLoading()

    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user);


    const sb = this.auth.authState.subscribe(u => {
      this.userID = u.uid
      console.log(this.userID);
      this.getuserdata(u.uid)
      console.log(this.user);
      console.log(this.user.phone);
      this.firestore.collection('helpers').doc(this.userID).valueChanges().subscribe((res: any) => {


        if (res == undefined) {

          const userID = this.userID
          const timestamp = new Date()
          const userDetails = this.user
          console.log(userDetails); 
          console.log(userID);
          console.log(timestamp);
         

          const name = this.user.name
          const phone = this.user.phone
          console.log(name);
          console.log(phone);
          this.user.uType = 'helper'
          this.firestore.collection('helpers').doc(this.userID).set({
            timestamp,
            userID,
            userDetails,
            phone,
          }).then(() => {

            this.loading.dismiss('load')

          })

        }
        else {

          if (!res.userDetails) {
            const userDetails = this.user
            this.firestore.collection('helpers').doc(this.userID).update({
              userDetails,

            })

          }
          this.checkRequestsSent(this.userID)

        }
      })

    })
  }

}
