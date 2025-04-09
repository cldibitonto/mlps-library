import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsBreadcrumbComponent } from './mlps-breadcrumb.component';

describe('MlpsBreadcrumbComponent', () => {
  let component: MlpsBreadcrumbComponent;
  let fixture: ComponentFixture<MlpsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
