import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigdetailComponent } from './configdetail.component';

describe('ConfigdetailComponent', () => {
  let component: ConfigdetailComponent;
  let fixture: ComponentFixture<ConfigdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
