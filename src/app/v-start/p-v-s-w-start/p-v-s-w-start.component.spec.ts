import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVSWStartComponent } from './p-v-s-w-start.component';

describe('PVSWStartComponent', () => {
  let component: PVSWStartComponent;
  let fixture: ComponentFixture<PVSWStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PVSWStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PVSWStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
