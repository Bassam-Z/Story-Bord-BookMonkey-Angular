import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMWBeginnComponent } from './v-m-w-beginn.component';

describe('VMWBeginnComponent', () => {
  let component: VMWBeginnComponent;
  let fixture: ComponentFixture<VMWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
