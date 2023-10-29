import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFiWBeginnComponent } from './t-fi-w-beginn.component';

describe('TFiWBeginnComponent', () => {
  let component: TFiWBeginnComponent;
  let fixture: ComponentFixture<TFiWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TFiWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TFiWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
