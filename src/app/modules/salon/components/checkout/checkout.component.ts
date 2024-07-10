import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalonService } from 'src/app/modules/shared/services/salon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  bookingDetails: any = {};
  bookingForm: FormGroup;
  addons: boolean[] = [];
  success = false;
  formSubmitted = false;

  constructor(
    private salonService: SalonService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.bookingDetails = this.salonService.getBookingDetails();
    this.addons = this.salonService.getAddons();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      console.log(this.bookingDetails);
      this.success = true;
    }
    this.formSubmitted = true;
  }

  getTotal(): number {
    let total = 0;

    if (this.addons[0]) {
      total += this.bookingDetails.addons[0].price;
    }
    if (this.addons[1]) {
      total += this.bookingDetails.addons[1].price;
    }
    total += this.bookingDetails.price;

    return total;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
