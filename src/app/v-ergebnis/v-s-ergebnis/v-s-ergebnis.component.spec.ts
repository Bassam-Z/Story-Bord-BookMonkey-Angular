import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSErgebnisComponent } from './v-s-ergebnis.component';

describe('VSErgebnisComponent', () => {
  let component: VSErgebnisComponent;
  let fixture: ComponentFixture<VSErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VSErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
