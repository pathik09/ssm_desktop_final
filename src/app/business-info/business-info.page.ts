import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {
  name: any;
  bname: any;
  email: any;
  mobile: any;
  user: any;
  choice: any;
  company_name:any;
  address:any;
  city:any;
  zipcode:any;
  gstin:any;
  panno:any;
  

  businessinfo: any;
  constructor(public firestore: AngularFirestore, public router: Router) { }
  continue() {
    if(this.gstin == undefined)
    {
      this.gstin = "";
    }
    if(this.email==undefined||this.name==undefined||this.mobile==undefined||this.city==undefined||this.company_name==undefined||this.address==undefined||this.zipcode==undefined||this.panno==undefined)
    {
      alert("all fields are required except gstin")
    }

    console.log(this.name);
    console.log(this.bname);
    //console.log(this.mobille);
    this.user = JSON.parse(window.localStorage.getItem('user'));
    let data =
    {
      name: this.name,
      bname: this.company_name,
      address: this.address,
      mobile: this.mobile,
      city:this.city,
      zipcode:this.zipcode,
      gstin:this.gstin,
      panno:this.panno,
      email:this.email
    }



   
    this.firestore.collection('stores').doc(this.user.docID).update({
     storeInfo:data
       }).then(data2 => console.log('data2')).catch((err) => {
      alert("all fields are required except gstin")
      //this.salesToBeUpload.push(data);
     //window.localStorage.setItem('salesToBeUpload', JSON.stringify(this.salesToBeUpload));
      //sub.unsubscribe();
    })
  
    window.localStorage.setItem("storeInfo", JSON.stringify(data))

    this.router.navigate(["home/settings"])

  }
  setchoice(abc){
    
  }

  scanBarcode() {

  }
  ngOnInit() {
    //this.user = JSON.parse(window.localStorage.getItem('user'))
  }
  close() {
    this.router.navigate(['home/settings'])
  }

}
