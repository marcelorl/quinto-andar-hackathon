import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposaSentPage } from './proposa-sent.page';

describe('ProposaSentPage', () => {
  let component: ProposaSentPage;
  let fixture: ComponentFixture<ProposaSentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposaSentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposaSentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
