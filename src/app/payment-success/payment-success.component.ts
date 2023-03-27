import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  constructor(
      public dialogRef: MatDialogRef<PaymentSuccessComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
