import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choicesuppcust',
  templateUrl: './choicesuppcust.page.html',
  styleUrls: ['./choicesuppcust.page.scss'],
})
export class ChoicesuppcustPage implements OnInit {

  constructor(private router:Router) { }
  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }


  ngOnInit() {
  }

}
