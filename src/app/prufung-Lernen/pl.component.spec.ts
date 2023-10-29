import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLComponent } from './pl.component';

describe('PLComponent', () => {
  let component: PLComponent;
  let fixture: ComponentFixture<PLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
