import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLPSInfoModalComponent } from './mlps-info-modal.component';

describe('MlpsModalComponent', () => {
  let component: MLPSInfoModalComponent;
  let fixture: ComponentFixture<MLPSInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MLPSInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLPSInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
