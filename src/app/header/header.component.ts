import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from "../models/product.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    cartTotal: number = 0;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartService.getItems().subscribe((items: Product[]) => {
            this.cartTotal = this.cartService.getTotal();
        });
    }

    openCart() {
    }
}
