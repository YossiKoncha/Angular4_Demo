import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsComponent } from './basic-operations.component';

describe('BasicOperationsComponent', () => {
  let component: BasicOperationsComponent;
  let fixture: ComponentFixture<BasicOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
