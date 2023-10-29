import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFiErgebnisComponent } from './v-fi-ergebnis.component';

describe('VFiErgebnisComponent', () => {
  let component: VFiErgebnisComponent;
  let fixture: ComponentFixture<VFiErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VFiErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VFiErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
