import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CartService} from "./services/cart.service";
import {CartModalComponent} from './cart-modal/cart-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgxStripeModule} from "ngx-stripe";
import {CheckoutModalComponent} from './checkout-modal/checkout-modal.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        HeaderComponent,
        CartModalComponent,
        CheckoutModalComponent,
        PaymentSuccessComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
        ]),
        BrowserAnimationsModule,
        MatCardModule, MatButtonModule, MatIconModule, MatDialogModule, MatToolbarModule, MatInputModule, MatSelectModule,
        NgxStripeModule.forRoot('pk_test_TYooMQauvdEDq54NiTphI7jx'),
        MatStepperModule,
    ],
    providers: [HttpClient, CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
