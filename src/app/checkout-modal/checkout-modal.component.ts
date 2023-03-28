import {Component, ViewChild} from '@angular/core';
import {StripeCardComponent, StripeService} from "ngx-stripe";
import {MatDialog} from "@angular/material/dialog";
import {PaymentSuccessComponent} from "../payment-success/payment-success.component";

@Component({
    selector: 'app-checkout-modal',
    templateUrl: './checkout-modal.component.html',
    styleUrls: ['./checkout-modal.component.css']
})
export class CheckoutModalComponent {
    @ViewChild(StripeCardComponent) card!: StripeCardComponent;

    cardOptions = {
        style: {
            base: {
                iconColor: '#666EE8',
                color: 'white',
                fontWeight: '500',
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                '::placeholder': {
                    color: '#CFD7E0',
                },
            },
        },
    };

    constructor(private stripeService: StripeService, private dialog: MatDialog) {
    }

    pay() {
        this.stripeService.createPaymentMethod({
            type: 'card',
            card: this.card.element,
        }).subscribe(result => {
            if (result.error) {
                console.log('error')
            } else {
                this.dialog.open(PaymentSuccessComponent, {
                    panelClass: 'custom-dialog', // Agrega la clase personalizada aquí
                    width: '50vw',
                    height: '50vw',
                    exitAnimationDuration: 2
                });
            }
        });
    }
}
