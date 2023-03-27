import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: Product[] = [];
    private cartSubject = new BehaviorSubject<Product[]>([]);

    constructor() { }

    addToCart(product: Product) {
        this.items.push(product);
        this.cartSubject.next(this.items);
    }

    getItems() {
        return this.cartSubject.asObservable();
    }

    getTotal() {
        return this.items.reduce((total, product) => total + product.price, 0);
    }
}
