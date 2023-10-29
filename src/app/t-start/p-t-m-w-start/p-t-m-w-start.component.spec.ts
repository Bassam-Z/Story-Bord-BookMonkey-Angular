import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTMWStartComponent } from './p-t-m-w-start.component';

describe('PTMWStartComponent', () => {
  let component: PTMWStartComponent;
  let fixture: ComponentFixture<PTMWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTMWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTMWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
