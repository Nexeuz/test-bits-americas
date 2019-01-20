import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBtnsBasicNotificationsComponent } from './container-btns-basic-notifications.component';

describe('ContainerBtnsBasicNotificationsComponent', () => {
  let component: ContainerBtnsBasicNotificationsComponent;
  let fixture: ComponentFixture<ContainerBtnsBasicNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBtnsBasicNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBtnsBasicNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
