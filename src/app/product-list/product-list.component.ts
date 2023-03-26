import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  sortOption: string = 'priceLowToHigh';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToCart() {

  }
}
