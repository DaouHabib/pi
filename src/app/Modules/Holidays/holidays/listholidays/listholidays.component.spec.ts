import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListholidaysComponent } from './listholidays.component';

describe('ListholidaysComponent', () => {
  let component: ListholidaysComponent;
  let fixture: ComponentFixture<ListholidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListholidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
