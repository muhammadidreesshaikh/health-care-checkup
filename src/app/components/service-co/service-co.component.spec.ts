import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCoComponent } from './service-co.component';

describe('ServiceCoComponent', () => {
  let component: ServiceCoComponent;
  let fixture: ComponentFixture<ServiceCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
