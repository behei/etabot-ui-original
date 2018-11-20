import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedSignUpTokenComponent } from './need-sign-up-token.component';

describe('NeedSignUpTokenComponent', () => {
  let component: NeedSignUpTokenComponent;
  let fixture: ComponentFixture<NeedSignUpTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedSignUpTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedSignUpTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
