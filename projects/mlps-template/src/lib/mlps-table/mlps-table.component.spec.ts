import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsTableComponent } from './mlps-table.component';

describe('MlpsTableComponent', () => {
  let component: MlpsTableComponent;
  let fixture: ComponentFixture<MlpsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
