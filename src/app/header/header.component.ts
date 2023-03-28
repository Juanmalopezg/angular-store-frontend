import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {CartItem} from "../models/cart.model";
import {CartModalComponent} from "../cart-modal/cart-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    cartTotal: number = 0;

    constructor(private cartService: CartService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.cartService.getItems().subscribe((items: CartItem[]) => {
            this.cartTotal = this.cartService.getTotal();
        });
    }

    openDialog(): void {
        this.dialog.open(CartModalComponent, {
            width: '75vw',
            data: {cartTotal: this.cartTotal}
        });
    }
}
