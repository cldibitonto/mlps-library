import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsTemplateComponent } from './mlps-template.component';

describe('MlpsTemplateComponent', () => {
  let component: MlpsTemplateComponent;
  let fixture: ComponentFixture<MlpsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
