import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalListPage } from './proposal-list.page';

describe('ProposalListPage', () => {
  let component: ProposalListPage;
  let fixture: ComponentFixture<ProposalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
