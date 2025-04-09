import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsHeaderComponent } from './mlps-header.component';

describe('MlpsHeaderComponent', () => {
  let component: MlpsHeaderComponent;
  let fixture: ComponentFixture<MlpsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
