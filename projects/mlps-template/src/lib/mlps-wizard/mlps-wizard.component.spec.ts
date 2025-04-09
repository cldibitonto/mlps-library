import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsWizardComponent } from './mlps-wizard.component';

describe('MlpsWizardComponent', () => {
  let component: MlpsWizardComponent;
  let fixture: ComponentFixture<MlpsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
