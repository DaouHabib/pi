import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ListresourcesComponent } from './listresources.component';

describe('ListresourcesComponent', () => {
  let component: ListresourcesComponent;
  let fixture: ComponentFixture<ListresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
