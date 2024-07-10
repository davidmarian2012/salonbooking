import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SalonModule } from './modules/salon/salon.module';
import { SalonService } from './modules/shared/services/salon.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SalonModule,
    MatTableModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [SalonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
