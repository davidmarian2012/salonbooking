import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { SalonServicesComponent } from './components/salon-services/salon-services.component';
import { ServiceExtrasComponent } from './components/service-extras/service-extras.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    MainComponent,
    SalonServicesComponent,
    ServiceExtrasComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainComponent,
    ServiceExtrasComponent,
    SalonServicesComponent,
    CheckoutComponent,
  ],
})
export class SalonModule {}
