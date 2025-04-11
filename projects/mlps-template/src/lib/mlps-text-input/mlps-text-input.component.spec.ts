import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsTextInputComponent } from './mlps-text-input.component';

describe('MlpsTextInputComponent', () => {
  let component: MlpsTextInputComponent;
  let fixture: ComponentFixture<MlpsTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
