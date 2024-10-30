import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePharmacyComponent } from './online-pharmacy.component';

describe('OnlinePharmacyComponent', () => {
  let component: OnlinePharmacyComponent;
  let fixture: ComponentFixture<OnlinePharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinePharmacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinePharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
