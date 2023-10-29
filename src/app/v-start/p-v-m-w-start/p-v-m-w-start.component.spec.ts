import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVMWStartComponent } from './p-v-m-w-start.component';

describe('PVMWStartComponent', () => {
  let component: PVMWStartComponent;
  let fixture: ComponentFixture<PVMWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PVMWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PVMWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
