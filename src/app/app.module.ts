
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';



/////////////////EKNIAZI IMPORTS/////////////////////////////
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { PapaParseModule } from 'ngx-papaparse';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
/////////////////FOR MULTILANGUAGE SUPPORT/////////////////////////////
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';
import { SharedModule } from './shared/shared.module';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Device } from '@ionic-native/device/ngx';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';

// // import FCM
// import { FCM } from '@ionic-native/fcm/ngx';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    SharedModule,
    FormsModule,

    ReactiveFormsModule,
    PapaParseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],

  providers: [
  
    StatusBar,
    File,
    FileTransfer,
    
    SplashScreen,
    AngularFirestore,
    TranslateConfigService,
    BarcodeScanner,
    SocialSharing,
    OneSignal,
    CallNumber,
    File,
    InAppPurchase2,
    Contacts,
    Device,
    SmsRetriever,
    
    // FCM,
    InAppPurchase,
    FileChooser,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
