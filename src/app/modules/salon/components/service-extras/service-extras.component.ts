import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonService } from 'src/app/modules/shared/services/salon.service';

@Component({
  selector: 'app-service-extras',
  templateUrl: './service-extras.component.html',
  styleUrls: ['./service-extras.component.scss'],
})
export class ServiceExtrasComponent implements OnInit {
  service: any;
  addons: boolean[] = [false, false];

  constructor(
    private route: ActivatedRoute,
    private salonService: SalonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const serviceName = this.route.snapshot.paramMap.get('serviceName');

    if (serviceName) {
      this.salonService.getData().subscribe((data) => {
        this.service = data.services.find(
          (service: { name: string }) =>
            this.formatRoute(service.name) === serviceName
        );
      });
    }
  }

  formatRoute(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  book(): void {
    this.salonService.setBookingDetails(this.service);
    this.salonService.setAddons(this.addons);
    this.router.navigate(['/checkout']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
