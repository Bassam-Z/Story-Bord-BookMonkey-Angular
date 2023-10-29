import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSWStartComponent } from './l-s-w-start.component';

describe('LSWStartComponent', () => {
  let component: LSWStartComponent;
  let fixture: ComponentFixture<LSWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
