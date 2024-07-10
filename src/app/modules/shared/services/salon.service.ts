import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SalonService {
  private url = 'assets/services.json';
  private booking: any;
  private addons: boolean[] = [];

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setBookingDetails(details: any) {
    this.booking = details;
  }

  getBookingDetails() {
    return this.booking;
  }

  setAddons(addons: boolean[]) {
    this.addons = addons;
  }

  getAddons() {
    return this.addons;
  }
}
