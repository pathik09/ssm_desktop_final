import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-allowed',
  templateUrl: './not-allowed.page.html',
  styleUrls: ['./not-allowed.page.scss'],
})
export class NotAllowedPage implements OnInit {

  constructor() { }

  ngOnInit() {
    navigator['app'].exitApp();
  }

}
