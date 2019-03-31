import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbannerComponent } from './subbanner.component';

describe('SubbannerComponent', () => {
  let component: SubbannerComponent;
  let fixture: ComponentFixture<SubbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
