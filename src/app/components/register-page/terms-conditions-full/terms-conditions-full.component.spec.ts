import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsFullComponent } from './terms-conditions-full.component';

describe('TermsConditionsFullComponent', () => {
  let component: TermsConditionsFullComponent;
  let fixture: ComponentFixture<TermsConditionsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsConditionsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsConditionsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
