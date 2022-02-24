import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.page.html',
  styleUrls: ['./borrowers.page.scss'],
})
export class BorrowersPage implements OnInit {

  constructor(
    public firestore: AngularFirestore,
    public alertController:AlertController

  ) { }

  helpers: any[];
  async askDelete(helper)
  {
    const alert3 = await this.alertController.create({
      subHeader: "Do you really want to delete staff?",
      
      mode: 'ios',
     
      buttons: [{
        text: 'Yes',
        handler: data => {
          
          this.delete(helper);
        },
      },{
        text:'No',
        handler:data=>
        {
          
        }
      }
      ],
    });
    await alert3.present();
   
    }

  getHelpers() {
    if (window.localStorage.getItem('helpers')) {
      this.helpers = JSON.parse(window.localStorage.getItem('helpers'));
      console.log("HELPERS:"+this.helpers.length);
      let helpers = [];
      this.helpers.forEach((element) => {
        console.log(element.length);
        this.firestore.collection("helpers").doc(element.id).valueChanges().subscribe((res: any) => {
          if (res == undefined) {

          }
          else {
            element.helperphone = res.phone;
            helpers.push(element);

          }
        })
      })
      this.helpers = helpers;
      console.log(this.helpers);
      //window.localStorage.setItem("helpers",JSON.stringify(this.helpers));

    } else {
      this.helpers = [];
    }

  }
  user:any;

  delete(helper) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user.docID);
    console.log(helper.id);
    console.log("CALLING THE DELETE CODE")
    this.firestore.collection("helpers").doc(helper.id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
    });
    let newhelpers = [];
    this.helpers.forEach((element) => {
      console.log(element.id)
      console.log(helper.id);
      console.log(element.id == helper.id)
      if (element.id == helper.id) {
       
      }
      else{
        newhelpers.push(element);
      }
    }
    )
    console.log(newhelpers.length);
    this.helpers = newhelpers;
    window.localStorage.setItem("helpers", JSON.stringify(this.helpers))
    this.firestore.collection('stores').doc(this.user.docID).update({
      helper:this.helpers
    })
   
  }

  ngOnInit() {
  }
  lenders: boolean;

  ionViewWillEnter() {
    this.getHelpers();
  }

}
