import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFiWStartComponent } from './l-fi-w-start.component';

describe('LFiWStartComponent', () => {
  let component: LFiWStartComponent;
  let fixture: ComponentFixture<LFiWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LFiWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LFiWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
