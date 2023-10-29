import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVFiWStartComponent } from './p-v-fi-w-start.component';

describe('PVFiWStartComponent', () => {
  let component: PVFiWStartComponent;
  let fixture: ComponentFixture<PVFiWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PVFiWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PVFiWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
