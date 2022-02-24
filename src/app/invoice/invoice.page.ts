import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { Router } from '@angular/router';
import { File } from '@awesome-cordova-plugins/file/ngx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import {SocialSharing} from '@ionic-native/social-sharing/ngx'


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  closeModal()
  {
    this.router.navigate(['pos'])
  }
paid:any;
  

public order=JSON.parse(window.localStorage.getItem("currentsale"));
  constructor( private file:File,private socialSharing :SocialSharing,private modalCtrl: ModalController,private pdfGenerator: PDFGenerator,private router:Router,
   
    
) {
  }
   randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  invoice:any;
address:any;
cname:any;
cnumber:any;
gstin:any;
sgst:any;
cgst:any;
gst:any;
products:any;
customer:any;
business_name:any;
user:any;
storeInfo:any;
basic:any;
name:any;
gstin_owner:any;

office:any;
panno:any;
email:any;
cname_header:any;
address_header:any;
gstin_header:any;
customer_exists=true;
  ngOnInit() {
    console.log("WE ARE IN THE INVOICE");
    this.basic = window.localStorage.getItem('basic');

    this.user = JSON.parse(window.localStorage.getItem("user"));
    this.storeInfo = JSON.parse(window.localStorage.getItem("storeInfo"))
    this.invoice = "#"+this.randomIntFromInterval(11111,99999)
    this.email = this.storeInfo.email;
    this.office = this.storeInfo.address + " "+this.storeInfo.city + " "+this.storeInfo.zipcode;
    
    if(this.basic == 1||this.user.uType==1)
    {
    
     this.business_name = this.storeInfo.bname;
    }
    else{
      this.business_name = "Smart Stock Management"
      this.email = "Smart Stock Management"
      this.office = "Smart Stock Management"
    }
    this.gstin_owner = this.storeInfo.gstin;
    this.panno = this.storeInfo.panno;
    console.log("GSTIN"+this.gstin);
    this.order = JSON.parse(window.localStorage.getItem("currentsale"));
    this.order.delivery_status = "delivered";
    
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    this.cgst = window.localStorage.getItem("cgst");
    this.sgst = window.localStorage.getItem("sgst");
    console.log("********CGST BEFORE******"+this.cgst)
    if(this.cgst == "null")
    {
      this.cgst = 0;
      this.sgst = 0;
    }
    console.log("CGST******"+this.cgst);
    console.log("SGST******+"+this.sgst);



this.order.createdAt = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
   
    this.products = new Array();
    this.products = JSON.parse(window.localStorage.getItem("Products"))
    console.log(this.products);
    this.customer = JSON.parse(window.localStorage.getItem("selectcustomer"))
    console.log("ORder Information:",this.order)
    console.log("Customer"+this.customer);
    this.address = this.customer.address;
    this.cnumber = this.customer.mobile;
    this.cname = this.customer.name;
    this.gstin = this.customer.gstin;
    if(this.address==''&&this.cnumber==''&&this.cname==''&&this.gstin=='')
    {
this.cname_header = '';
this.gstin_header = '';
this.address_header = '';
    }
    else{
      this.cname_header = "Client Name";
      this.gstin_header='GSTIN';
      this.address_header = "Address  ";
    }
    let product:any;
    //this.order = JSON.parse(this.order)
    //console.log("Order Products"+this.products)
    
    this.products = this.order.recipt;
    console.log("Order"+JSON.stringify(this.order.recipt))
    
   
    

   
  }
  async openInvoice(order) {
    this.order = JSON.parse(window.localStorage.getItem("currentsale"));
    this.order.delivery_status = "delivered";
    this.order.createdAt = "created";
    
    const InvoiceModal = await this.createModal(InvoicePage, { order });
    await InvoiceModal.present();
  }
  content:any;
  downlaoaded=false;
  async downloadInvoice() {
      
    console.log("We are in the downloadInvoice");
    var node = document.getElementById('PrintInvoice');
 
domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        var doc = new jsPDF();
        doc.addImage(dataUrl,25,40, 150, 100);
        doc.save("invoice.pdf")
        var blob = doc.output();
        console.log(blob);
        //document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

   
  }

  sendEmail(){
    
    
    
    this.socialSharing.canShareViaEmail().then(() => {
      
          }).catch(() => {
      // Sharing via email is not possible
    });
    this.socialSharing.shareViaEmail('Invoice has beenb generated fir you.', 'Invoice been sent', ['pathik09@gmail.com','','',"file///Downloads/"+"+Order-Invoice.pdf"]).then(() => {
      alert("email sent")
    }).catch(() => {
      // Error!
    });

    

  }



  async createModal(component, componentProps?, cssClass?): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps,
      backdropDismiss: true
    });
    return modal;
  }

}
