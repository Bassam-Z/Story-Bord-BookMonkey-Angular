import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMErgebnisComponent } from './v-m-ergebnis.component';

describe('VMErgebnisComponent', () => {
  let component: VMErgebnisComponent;
  let fixture: ComponentFixture<VMErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
