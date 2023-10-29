import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCListComponent } from './s-c-list.component';

describe('SCListComponent', () => {
  let component: SCListComponent;
  let fixture: ComponentFixture<SCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
