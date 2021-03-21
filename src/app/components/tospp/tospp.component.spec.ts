import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosppComponent } from './tospp.component';

describe('TosppComponent', () => {
  let component: TosppComponent;
  let fixture: ComponentFixture<TosppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
