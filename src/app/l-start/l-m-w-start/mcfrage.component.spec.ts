import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCFrageComponent } from './mcfrage.component';

describe('MCFrageComponent', () => {
  let component: MCFrageComponent;
  let fixture: ComponentFixture<MCFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCFrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
