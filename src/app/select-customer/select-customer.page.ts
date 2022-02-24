import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCustomerPage } from '../add-customer/add-customer.page';


@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.page.html',
  styleUrls: ['./select-customer.page.scss'],
})
export class SelectCustomerPage implements OnInit {

  searchFound:any;
  searchParam:any;
  toShow:any;
  searchItem() {
    this.searchFound = [];
    var found = 0;
    console.log(this.searchParam);
    if (this.searchParam != "") {
      for (var k = 0; k < this.suppliers.length; k++) {
        if (this.suppliers[k].name.toLowerCase().includes(this.searchParam.toLowerCase())) {
          found = found + 1;
          if (found < 8) {
            this.searchFound.push(this.suppliers[k]);
            this.searchFound[this.searchFound.length - 1].index = k;
          } else break
        }
              
      }
    }
    this.toShow = this.searchFound
    if(this.searchParam == "")
    {
      this.toShow = this.suppliers;
    }
  
  }
  

  constructor(
    public modalController: ModalController,
  ) { }

  suppliers: any[];
  ModalPage: any;
  returnDat:any;

  async openModal() {
    const modal = await this.modalController.create({
      component: this.ModalPage,
      cssClass: 'color-modal',
    });

    modal.onDidDismiss()
      .then((event: any) => {
        if (event['data']) {
          this.returnDat = event['data'];
          setTimeout(()=>{
            this.selectSupplier(this.returnDat);
          },600)
        }
      });

    return await modal.present();
  }

  getSuppliers() {
    if (window.localStorage.getItem('customers')) {
      this.suppliers = JSON.parse(window.localStorage.getItem('customers'));
    } else {
      this.suppliers = [];
    }
  }

  addSupplier(){
    this.ModalPage = AddCustomerPage;
    this.openModal();
  }

  selectSupplier(boi){
    this.modalController.dismiss(boi);
  }

  ngOnInit() {
    this.getSuppliers();
    this.toShow = this.suppliers;
  }

}
