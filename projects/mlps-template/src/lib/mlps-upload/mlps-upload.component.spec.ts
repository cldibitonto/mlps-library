import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsUploadComponent } from './mlps-upload.component';

describe('MlpsUploadComponent', () => {
  let component: MlpsUploadComponent;
  let fixture: ComponentFixture<MlpsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
