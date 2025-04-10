import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpsNotificationComponent } from './mlps-notification.component';

describe('MlpsNotificationComponent', () => {
  let component: MlpsNotificationComponent;
  let fixture: ComponentFixture<MlpsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpsNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
