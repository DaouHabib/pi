import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewresourceComponent } from './newresource.component';

describe('NewresourceComponent', () => {
  let component: NewresourceComponent;
  let fixture: ComponentFixture<NewresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
