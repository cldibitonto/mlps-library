import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsCarouselComponent } from './mlps-carousel.component';

describe('MlpsCarouselComponent', () => {
  let component: MlpsCarouselComponent;
  let fixture: ComponentFixture<MlpsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
