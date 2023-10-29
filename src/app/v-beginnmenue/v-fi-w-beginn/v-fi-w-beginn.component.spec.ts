import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFiWBeginnComponent } from './v-fi-w-beginn.component';

describe('VFiWBeginnComponent', () => {
  let component: VFiWBeginnComponent;
  let fixture: ComponentFixture<VFiWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VFiWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VFiWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
