import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CartService} from "./services/cart.service";
import { CartModalComponent } from './cart-modal/cart-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        HeaderComponent,
        FooterComponent,
        CartModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
        ])
    ],
    providers: [HttpClient, CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
