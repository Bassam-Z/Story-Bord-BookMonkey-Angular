import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCTVFrageComponent } from './m-c-t-v-frage.component';

describe('MCTVFrageComponent', () => {
  let component: MCTVFrageComponent;
  let fixture: ComponentFixture<MCTVFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCTVFrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCTVFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
