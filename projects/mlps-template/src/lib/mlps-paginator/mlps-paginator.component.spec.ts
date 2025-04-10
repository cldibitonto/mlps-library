import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsPaginatorComponent } from './mlps-paginator.component';

describe('MlpsPaginatorComponent', () => {
  let component: MlpsPaginatorComponent;
  let fixture: ComponentFixture<MlpsPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
