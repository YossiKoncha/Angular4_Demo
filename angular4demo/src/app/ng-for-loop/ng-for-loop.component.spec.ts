import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForLoopComponent } from './ng-for-loop.component';

describe('NgForLoopComponent', () => {
  let component: NgForLoopComponent;
  let fixture: ComponentFixture<NgForLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
