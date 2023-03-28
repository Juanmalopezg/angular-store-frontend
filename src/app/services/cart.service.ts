import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/product.model';
import {CartItem} from "../models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart: CartItem[] = [];
    private cartSubject = new BehaviorSubject<CartItem[]>([]);

    constructor() {
    }

    addToCart(product: Product) {
        const index = this.cart.findIndex(item => item.product.id === product.id);
        if (index !== -1) {
            this.cart[index].quantity += 1;
        } else {
            const cartItem: CartItem = {
                product: product,
                quantity: 1
            };
            this.cart.push(cartItem);
        }
        this.cartSubject.next(this.cart);
    }

    getItems() {
        return this.cartSubject.asObservable();
    }

    getTotal() {
        return this.cart.reduce((total, cartItem) => total + (cartItem.product.price * cartItem.quantity), 0);
    }

    removeFromCart(product: Product) {
        const index = this.cart.findIndex(item => item.product.id === product.id);
        if (index !== -1) {
            if (this.cart[index].quantity === 1) {
                this.cart.splice(index, 1);
            } else {
                this.cart[index].quantity -= 1;
            }
        }
        this.cartSubject.next(this.cart);
    }
}
