import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLPSLoaderComponent } from './mlps-loader.component';

describe('MlpsLoaderComponent', () => {
  let component: MLPSLoaderComponent;
  let fixture: ComponentFixture<MLPSLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MLPSLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLPSLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
