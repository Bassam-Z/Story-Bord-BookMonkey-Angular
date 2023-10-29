import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrufmodusComponent } from './prufmodus.component';

describe('PrufmodusComponent', () => {
  let component: PrufmodusComponent;
  let fixture: ComponentFixture<PrufmodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrufmodusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrufmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
