import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiIListComponent } from './fi-i-list.component';

describe('FiIListComponent', () => {
  let component: FiIListComponent;
  let fixture: ComponentFixture<FiIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiIListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
