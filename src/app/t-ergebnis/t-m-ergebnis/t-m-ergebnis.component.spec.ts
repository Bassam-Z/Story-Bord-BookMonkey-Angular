import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMErgebnisComponent } from './t-m-ergebnis.component';

describe('TMErgebnisComponent', () => {
  let component: TMErgebnisComponent;
  let fixture: ComponentFixture<TMErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TMErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
