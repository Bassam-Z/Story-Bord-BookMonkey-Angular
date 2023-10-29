import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFiErgebnisComponent } from './l-fi-ergebnis.component';

describe('LFiErgebnisComponent', () => {
  let component: LFiErgebnisComponent;
  let fixture: ComponentFixture<LFiErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LFiErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LFiErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
