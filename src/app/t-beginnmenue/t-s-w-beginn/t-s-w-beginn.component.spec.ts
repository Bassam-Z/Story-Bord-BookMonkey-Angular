import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSWBeginnComponent } from './t-s-w-beginn.component';

describe('TSWBeginnComponent', () => {
  let component: TSWBeginnComponent;
  let fixture: ComponentFixture<TSWBeginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSWBeginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSWBeginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
