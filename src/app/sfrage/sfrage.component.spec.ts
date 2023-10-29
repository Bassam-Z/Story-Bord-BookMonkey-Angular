import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFrageComponent } from './sfrage.component';

describe('SFrageComponent', () => {
  let component: SFrageComponent;
  let fixture: ComponentFixture<SFrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SFrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SFrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
