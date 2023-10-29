import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSErgebnisComponent } from './t-s-ergebnis.component';

describe('TSErgebnisComponent', () => {
  let component: TSErgebnisComponent;
  let fixture: ComponentFixture<TSErgebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSErgebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSErgebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
