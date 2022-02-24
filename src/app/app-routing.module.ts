import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },{
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemPageModule)
  },
  {
    path: 'add-supplier',
    loadChildren: () => import('./add-supplier/add-supplier.module').then(m => m.AddSupplierPageModule)
  },
  {
    path: 'select-supplier',
    loadChildren: () => import('./select-supplier/select-supplier.module').then(m => m.SelectSupplierPageModule)
  },
  {
    path: 'pos',
    loadChildren: () => import('./pos/pos.module').then(m => m.POSPageModule)
  },
  {
    path: 'select-item',
    loadChildren: () => import('./select-item/select-item.module').then(m => m.SelectItemPageModule)
  },
  {
    path: 'excel-import',
    loadChildren: () => import('./excel-import/excel-import.module').then(m => m.ExcelImportPageModule)
  },
  {
    path: 'helperpage',
    loadChildren: () => import('./helperpage/helperpage.module').then(m => m.HelperpagePageModule)
  },
  {
    path: 'ownerpage',
    loadChildren: () => import('./ownerpage/ownerpage.module').then(m => m.OwnerpagePageModule)
  },
  {
    path: 'selectpurchaseorder',
    loadChildren: () => import('./selectpurchaseorder/selectpurchaseorder.module').then( m => m.SelectpurchaseorderPageModule)
  },
  {
    path: 'purchaseorder',
    loadChildren: () => import('./purchaseorder/purchaseorder.module').then( m => m.PurchaseorderPageModule)
  },
  
  {
    path: 'ledger-report-date-input',
    loadChildren: () => import('./ledger-report-date-input/ledger-report-date-input.module').then( m => m.LedgerReportDateInputPageModule)
  },
  {
    path: 'po-report',
    loadChildren: () => import('./po-report/po-report.module').then( m => m.PoReportPageModule)
  },
  {
    path: 'ledgerreport',
    loadChildren: () => import('./ledgerreport/ledgerreport.module').then( m => m.LedgerreportPageModule)
  },
  {
    path: 'business-info',
    loadChildren: () => import('./business-info/business-info.module').then( m => m.BusinessInfoPageModule)
  },
  {
    path: 'sales-page',
    loadChildren: () => import('./sales-page/sales-page.module').then( m => m.SalesPagePageModule)
  },
  {
    path: 'email-id-creation',
    loadChildren: () => import('./email-id-creation/email-id-creation.module').then( m => m.EmailIdCreationPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'choicesuppcust',
    loadChildren: () => import('./choicesuppcust/choicesuppcust.module').then( m => m.ChoicesuppcustPageModule)
  },
  {
    path: 'select-customer',
    loadChildren: () => import('./select-customer/select-customer.module').then( m => m.SelectCustomerPageModule)
  },
  {
    path: 'select-customer',
    loadChildren: () => import('./select-customer/select-customer.module').then( m => m.SelectCustomerPageModule)
  },
  
  {
    path: 'quotation',
    loadChildren: () => import('./quotation/quotation.module').then( m => m.QuotationPageModule)
  },
  {
    path: 'addsupplier1',
    loadChildren: () => import('./addsupplier1/addsupplier1.module').then( m => m.Addsupplier1PageModule)
  },
  {
    path: 'not-allowed',
    loadChildren: () => import('./not-allowed/not-allowed.module').then( m => m.NotAllowedPageModule)
  },  {
    path: 'not-authorized',
    loadChildren: () => import('./not-authorized/not-authorized.module').then( m => m.NotAuthorizedPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
