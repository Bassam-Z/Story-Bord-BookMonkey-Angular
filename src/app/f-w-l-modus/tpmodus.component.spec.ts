import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPmodusComponent } from './tpmodus.component';

describe('TPmodusComponent', () => {
  let component: TPmodusComponent;
  let fixture: ComponentFixture<TPmodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPmodusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
