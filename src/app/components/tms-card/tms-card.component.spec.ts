import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsCardComponent } from './tms-card.component';

describe('TmsCardComponent', () => {
  let component: TmsCardComponent;
  let fixture: ComponentFixture<TmsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
