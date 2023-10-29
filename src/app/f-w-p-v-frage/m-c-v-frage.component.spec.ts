import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCVFrageComponent } from './m-c-v-frage.component';

describe('MCVFrageComponent', () => {
  let component: MCVFrageComponent;
  let fixture: ComponentFixture<MCVFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCVFrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCVFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
