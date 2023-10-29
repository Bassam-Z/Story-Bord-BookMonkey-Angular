import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTSWStartComponent } from './p-t-s-w-start.component';

describe('PTSWStartComponent', () => {
  let component: PTSWStartComponent;
  let fixture: ComponentFixture<PTSWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTSWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTSWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
