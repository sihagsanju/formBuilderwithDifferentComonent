import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildaddressComponent } from './childaddress.component';

describe('ChildaddressComponent', () => {
  let component: ChildaddressComponent;
  let fixture: ComponentFixture<ChildaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
