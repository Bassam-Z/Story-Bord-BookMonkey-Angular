import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSErgebnisComponent } from './l-s-ergebnis.component';

describe('LSErgebnisComponent', () => {
  let component: LSErgebnisComponent;
  let fixture: ComponentFixture<LSErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
