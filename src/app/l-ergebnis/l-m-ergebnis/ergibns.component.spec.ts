import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgibnsComponent } from './ergibns.component';

describe('ErgibnsComponent', () => {
  let component: ErgibnsComponent;
  let fixture: ComponentFixture<ErgibnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgibnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgibnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
