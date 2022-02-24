import { Router } from '@angular/router';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { HttpRequest, HttpEvent, HttpResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.page.html',
  styleUrls: ['./excel-import.page.scss'],
})
export class ExcelImportPage implements OnInit {
paid:any;
  constructor(
    private file:File,
    private transfer:FileTransfer,
    private http: HttpClient,
    private papa: Papa,
    private plt: Platform,
    private router: Router,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private loadingController: LoadingController,
    public toastController: ToastController,
    public modalController: ModalController,
    public firestore: AngularFirestore,
    
  ) { }
  
  csvData: any[] = [];
  headerRow: any[] = [];
  fileURL: string;
  fileTo: File;
  tempItems: any[] = [];
  items: any;
  user: any;
  itemsToBeUploaded: any;
  params: any;
  msg: string;
  gst:any;
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 4000,
      color: 'dark',
    });
    toast.present();
  }
download()
{
  const fileTransfer: FileTransferObject = this.transfer.create();
  const url = 'https://www.smartbusinessolutions.in/smartbusinesssolutions/inputforssm.csv';
  fileTransfer.download(url, this.file.dataDirectory + 'input.csv').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 6000,

    });
    await loading.present();
    

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  selectedFiles: FileList;
  currentFile: File;
  
  imageURL: string;
  selectFile(event) {
    this.presentLoading();
    this.selectedFiles = event.target.files; this.extractData(this.selectedFiles.item(0));  }
    
   // }

  
  private loadCSV(fileURL: string) {
    this.http
      .get(fileURL, {
        responseType: 'text'
      })
      .subscribe(
        data => this.extractData(data),

        err => alert('something went wrong: ' + JSON.stringify(err))
      );
  }



  private extractData(res) {
    console.log(res);

    let csvData = res || '';
    console.log(csvData);

    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
        this.processData();
      }
    });
  }

  processData() {
    for (var i = 0; i < this.csvData.length-1; i++) {
      let data = {
        name: this.csvData[i][0],
        rPrice: this.csvData[i][1],
        pPrice: this.csvData[i][2],
        gst:this.csvData[i][3],
        stock: this.csvData[i][4],
        uom:this.csvData[i][5],
        barcode:this.csvData[i][6],
        
        
        mquantity:this.csvData[i][8]
      }
      console.log(data.rPrice)
      console.log(data.pPrice)
  
         //data.rPrice = Number.parseInt(data.rPrice)
      if (data.mquantity && data.name && data.rPrice && data.pPrice && data.stock && data.barcode && data.gst) {
        console.log(data);
        this.tada = true;
        this.tempItems.push(data);
      }
      else if (!data.name || !data.rPrice || !data.pPrice || !data.stock || !data.barcode || !data.mquantity || !data.gst||!data.uom) {
      
        if(!data.rPrice){
          console.log("We are in the data.rPrice"+data.rPrice)
          data.rPrice = 0;
        }
        if(!data.pPrice){
          data.pPrice = 0;
        }
        if(!data.stock||Number.isInteger(data.stock)){
          data.stock = 0;
         
        }
        if(!data.rPrice||Number.isInteger(data.rPrice)){
          data.rPrice = 0;
        }
        if(!data.gst||Number.isInteger(data.gst)){
          data.gst = 0;
        }
       
        if(!data.mquantity||Number.isInteger(data.mquantity)){
          data.mquantity = 10;
        }
        if (!data.barcode || data.barcode.length == 0)
        {
          data.barcode = " ";
        }
       
        if (!data.uom || data.uom.length == 0)
        {
          data.uom = "";
        }
     

        console.log(JSON.stringify(data));
   
   
        this.tada = true;
          this.tempItems.push(data);

          this.msg = 'we found some missing fields you can add them later'
          this.presentToast()

        
      }
    }
    this.loadingController.dismiss();
  }
  downloadFile()
  {
    console.log("We are in the download File()");
    window.open("https://www.smartbusinessolutions.in/smartbusinesssolutions/inputforssm.csv", "_blank");

  }

  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
    if (this.plt.is('cordova')) {
      //this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {

      //});

    } else {
      // Dummy implementation for Desktop download purpose
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'newdata.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  addItems() {
    for (var i = 1; i < this.tempItems.length; i++) {
      this.tempItems[i].purchaseOrder=new Array();
      this.items.push(this.tempItems[i])
      let data = this.tempItems[i];
      console.log(data);
     // console.log(data);
      this.user =JSON.parse( window.localStorage.getItem('user'));
      console.log(this.user)
      if(this.paid==1||this.user.uType==1)
      {
      this.firestore.collection('stores').doc(this.user.docID).update({
        items: firebase.firestore.FieldValue.arrayUnion(data)
      })
    }
  }
    this.items = (window.localStorage.setItem('items', JSON.stringify(this.items)));
    this.msg = this.tempItems.length - 1 + ' items have been added to your inventory'
    this.presentToast();
    this.close();
  }

  close() {
    this.modalController.dismiss().then(() => {

    }).catch(() => {
      this.router.navigate(['home/dashboard'])
    });

  }

  getItems() {
    if (window.localStorage.getItem('items')) {
      this.items = JSON.parse(window.localStorage.getItem('items'));
    } else {
      this.items = [];
    }
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user'));
    } else {
      this.user = [];
    }
  }

  ionViewWillEnter() {
    this.getItems();
    this.tempItems = [];
    console.log('temp', this.tempItems);
         this.paid = window.localStorage.getItem("paid");
    
  

  }

  tada: boolean;
  ngOnInit() {
    this.getItems();
    if (this.tempItems.length < 1) {
      this.tada = false;
    }
    else {
      this.tada = true;
    }
  }

}
