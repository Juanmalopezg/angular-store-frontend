import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartTotal: number;

  constructor() {
    this.cartTotal = 0;
  }

  ngOnInit() {

  }

  openCart() {

  }
}
