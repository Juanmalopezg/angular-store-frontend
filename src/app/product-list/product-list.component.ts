import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../models/product.model';
import {CartService} from "../services/cart.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    order: 'asc' | 'desc' = 'asc';

    constructor(private http: HttpClient, private cartService: CartService) {
    }

    ngOnInit(): void {
        const params = new HttpParams()
            .set('page', '1')
            .set('limit', '12');

        this.http.get<Product[]>('http://localhost:3000/products', {params})
            .subscribe((data: Product[]) => {
                this.products = data.sort((a, b) => {
                    return a.price - b.price;
                });
            });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }


    toggleOrder() {
        this.order = this.order === 'asc' ? 'desc' : 'asc';
        this.products = this.products.sort((a, b) => {
            if (this.order === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }
}
