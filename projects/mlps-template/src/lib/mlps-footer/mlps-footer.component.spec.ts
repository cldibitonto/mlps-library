import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsFooterComponent } from './mlps-footer.component';

describe('MlpsFooterComponent', () => {
  let component: MlpsFooterComponent;
  let fixture: ComponentFixture<MlpsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
