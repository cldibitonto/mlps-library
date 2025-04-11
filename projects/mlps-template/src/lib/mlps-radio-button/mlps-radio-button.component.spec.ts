import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsRadioButtonComponent } from './mlps-radio-button.component';

describe('MlpsRadioButtonComponent', () => {
  let component: MlpsRadioButtonComponent;
  let fixture: ComponentFixture<MlpsRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
