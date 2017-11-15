import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Db2Component } from './db2.component';

describe('Db2Component', () => {
  let component: Db2Component;
  let fixture: ComponentFixture<Db2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Db2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Db2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
