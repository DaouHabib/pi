import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleaveComponent } from './newleave.component';

describe('NewleaveComponent', () => {
  let component: NewleaveComponent;
  let fixture: ComponentFixture<NewleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
