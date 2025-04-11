import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsCheckboxComponent } from './mlps-checkbox.component';

describe('MlpsCheckboxComponent', () => {
  let component: MlpsCheckboxComponent;
  let fixture: ComponentFixture<MlpsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
