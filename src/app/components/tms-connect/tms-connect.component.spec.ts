import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsConnectComponent } from './tms-connect.component';

describe('TmsConnectComponent', () => {
  let component: TmsConnectComponent;
  let fixture: ComponentFixture<TmsConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmsConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
