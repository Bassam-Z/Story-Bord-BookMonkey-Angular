import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFiWBeginnComponent } from './l-fi-w-beginn.component';

describe('LFiWBeginnComponent', () => {
  let component: LFiWBeginnComponent;
  let fixture: ComponentFixture<LFiWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LFiWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LFiWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
