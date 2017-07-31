import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStatedComponent } from './get-stated.component';

describe('GetStatedComponent', () => {
  let component: GetStatedComponent;
  let fixture: ComponentFixture<GetStatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
