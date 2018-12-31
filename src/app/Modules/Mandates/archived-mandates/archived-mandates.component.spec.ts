import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedMandatesComponent } from './archived-mandates.component';

describe('ArchivedMandatesComponent', () => {
  let component: ArchivedMandatesComponent;
  let fixture: ComponentFixture<ArchivedMandatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedMandatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedMandatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
