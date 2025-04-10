import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsModalComponent } from './mlps-modal.component';

describe('MlpsModalComponent', () => {
  let component: MlpsModalComponent;
  let fixture: ComponentFixture<MlpsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
