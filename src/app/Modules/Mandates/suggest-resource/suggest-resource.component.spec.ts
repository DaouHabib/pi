import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestResourceComponent } from './suggest-resource.component';

describe('SuggestResourceComponent', () => {
  let component: SuggestResourceComponent;
  let fixture: ComponentFixture<SuggestResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
