import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/salon/components/main/main.component';
import { ServiceExtrasComponent } from './modules/salon/components/service-extras/service-extras.component';
import { CheckoutComponent } from './modules/salon/components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: ':serviceName', component: ServiceExtrasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
