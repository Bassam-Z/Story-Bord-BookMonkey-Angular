import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCFFrageComponent } from './mcffrage.component';

describe('MCFFrageComponent', () => {
  let component: MCFFrageComponent;
  let fixture: ComponentFixture<MCFFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCFFrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCFFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
