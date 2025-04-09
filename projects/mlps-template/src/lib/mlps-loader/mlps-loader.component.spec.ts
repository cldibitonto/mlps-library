import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsLoaderComponent } from './mlps-loader.component';

describe('MlpsLoaderComponent', () => {
  let component: MlpsLoaderComponent;
  let fixture: ComponentFixture<MlpsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
