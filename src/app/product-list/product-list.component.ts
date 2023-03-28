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
    sortBy: 'asc' | 'desc' = 'asc';
    loading: boolean = true;
    page: number = 1;
    limit: number = 12;

    constructor(private http: HttpClient, private cartService: CartService) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.loading = true;
        const params = new HttpParams()
            .set('page', this.page.toString())
            .set('limit', this.limit.toString())
            .set('sortBy', this.sortBy);

        this.http.get<Product[]>('http://localhost:3000/products', {params})
            .subscribe((data: Product[]) => {
                this.products = data;
                this.loading = false;
            });
    }


    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }

    getNextPage() {
        this.page++;
        this.getProducts();
    }

    getPrevPage() {
        this.page--;
        this.getProducts();
    }
}