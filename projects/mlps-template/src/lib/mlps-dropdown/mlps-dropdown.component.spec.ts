import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsDropdownComponent } from './mlps-dropdown.component';

describe('MlpsDropdownComponent', () => {
  let component: MlpsDropdownComponent;
  let fixture: ComponentFixture<MlpsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
