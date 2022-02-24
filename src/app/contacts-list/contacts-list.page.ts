import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.page.html',
  styleUrls: ['./contacts-list.page.scss'],
})
export class ContactsListPage implements OnInit {

  contacts: any[] = []
  searchContacts: any = []
  searchBar: any;
  phoneNumber: any = '';
  selectedContact: any;

  constructor(
    private contact: Contacts,
    private modalCtrl: ModalController,
    public loadingController: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.getContactList();
  }

  public async getContactList(): Promise<void> {
    // const loading = await this.loadingController.create({
    //   message: 'contactlist loading',
    // });
    // await loading.present();
    this.contact.find(["displayName", "phoneNumbers"], { multiple: true }).then((data) => {
      console.log("contact info == : ", data);
      for (let i in data) {
        var ccc: Contact = data[i];
        var pp = []
        if (ccc["_objectInstance"].phoneNumbers) {
          pp = ccc["_objectInstance"].phoneNumbers;
          for (let j in pp) {
            let cc = {};
            cc["name"] = ccc["_objectInstance"].name.formatted;
            cc["phone"] = pp[j].value
            this.contacts.push(cc);
            this.searchContacts.push(cc);
          }
        }
      }
      // loading.dismiss();
      if (this.contacts.length === 0) {
        this.presentAlert("Contact list", "There is no contact.");
      }
    })
  }

  public async presentAlert(type, msg): Promise<void> {
    const alert = await this.alertController.create({
      header: type,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  getPhone(contact) {
    this.phoneNumber = contact.phone;
    this.selectedContact = contact;
  }

  initializeItems(): void {
    this.contacts = this.searchContacts;
  }

  getItems(ccc) {
    console.log("contact search === ", ccc)
    this.initializeItems();
    let q = ccc;
    if (!q) {
      return;
    }
    this.contacts = this.contacts.filter(item => item.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  }

  selected() {
    this.modalCtrl.dismiss({contact: this.selectedContact}, 'selected');
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
