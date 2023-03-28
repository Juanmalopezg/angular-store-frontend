import {Component, Inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';
import {CartItem} from "../../models/cart.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PaymentModalComponent} from "../payment-modal/payment-modal.component";


@Component({
    selector: 'app-cart-modal',
    templateUrl: './cart-modal.component.html',
    styleUrls: ['./cart-modal.component.css'],
})
export class CartModalComponent {
    cart: CartItem[] = [];
    cartTotal: number = 0;

    constructor(public cartService: CartService, public dialogRef: MatDialogRef<CartModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
        this.cartService.getItems().subscribe((items: CartItem[]) => {
            this.cart = items;
            this.cartTotal = this.cartService.getTotal();
        });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }

    removeFromCart(product: Product) {
        this.cartService.removeFromCart(product);
        this.cartTotal = this.cartService.getTotal();
    }


    openCheckoutDialog() {
        this.dialog.open(PaymentModalComponent, {
            width: '50vw'
        });
    }
}
