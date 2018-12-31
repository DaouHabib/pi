import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMandateComponent } from './map-mandate.component';

describe('MapMandateComponent', () => {
  let component: MapMandateComponent;
  let fixture: ComponentFixture<MapMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
