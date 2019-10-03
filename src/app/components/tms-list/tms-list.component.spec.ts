import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsListComponent } from './tms-list.component';

describe('TmsListComponent', () => {
  let component: TmsListComponent;
  let fixture: ComponentFixture<TmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
