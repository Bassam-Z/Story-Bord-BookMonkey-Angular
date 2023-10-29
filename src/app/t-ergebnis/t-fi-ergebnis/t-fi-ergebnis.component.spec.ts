import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFiErgebnisComponent } from './t-fi-ergebnis.component';

describe('TFiErgebnisComponent', () => {
  let component: TFiErgebnisComponent;
  let fixture: ComponentFixture<TFiErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFiErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TFiErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
