import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSWBeginnComponent } from './l-s-w-beginn.component';

describe('LSWBeginnComponent', () => {
  let component: LSWBeginnComponent;
  let fixture: ComponentFixture<LSWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
