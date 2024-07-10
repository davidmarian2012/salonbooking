import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExtrasComponent } from './service-extras.component';

describe('ServiceExtrasComponent', () => {
  let component: ServiceExtrasComponent;
  let fixture: ComponentFixture<ServiceExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
