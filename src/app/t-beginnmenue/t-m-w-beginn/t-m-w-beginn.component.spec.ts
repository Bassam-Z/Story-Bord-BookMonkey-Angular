import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMWBeginnComponent } from './t-m-w-beginn.component';

describe('TMWBeginnComponent', () => {
  let component: TMWBeginnComponent;
  let fixture: ComponentFixture<TMWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TMWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
