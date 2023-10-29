import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCListComponent } from './m-c-list.component';

describe('MCListComponent', () => {
  let component: MCListComponent;
  let fixture: ComponentFixture<MCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
