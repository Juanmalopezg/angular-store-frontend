import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {CartItem} from "../models/cart.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    cartTotal: number = 0;
    showModal: boolean = false;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartService.getItems().subscribe((items: CartItem[]) => {
            this.cartTotal = this.cartService.getTotal();
        });
    }

    openCart() {
        this.showModal = true;
    }
}
