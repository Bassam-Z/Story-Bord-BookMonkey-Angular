import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTFiWStartComponent } from './p-t-fi-w-start.component';

describe('PTFiWStartComponent', () => {
  let component: PTFiWStartComponent;
  let fixture: ComponentFixture<PTFiWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTFiWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTFiWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
