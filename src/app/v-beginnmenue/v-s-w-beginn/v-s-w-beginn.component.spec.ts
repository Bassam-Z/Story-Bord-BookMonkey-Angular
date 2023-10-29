import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSWBeginnComponent } from './v-s-w-beginn.component';

describe('VSWBeginnComponent', () => {
  let component: VSWBeginnComponent;
  let fixture: ComponentFixture<VSWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VSWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
