import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePage } from './house.page';

describe('HousePage', () => {
  let component: HousePage;
  let fixture: ComponentFixture<HousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
