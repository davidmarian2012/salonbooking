import { Component, OnInit } from '@angular/core';
import { SalonService } from 'src/app/modules/shared/services/salon.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-salon-services',
  templateUrl: './salon-services.component.html',
  styleUrls: ['./salon-services.component.scss'],
})
export class SalonServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private salonService: SalonService) {}

  ngOnInit(): void {
    this.salonService.getData().subscribe((data) => {
      this.services = data.services;
    });
  }

  formatRoute(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
