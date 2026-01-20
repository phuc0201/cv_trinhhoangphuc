import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixExpComponent } from './six-exp.component';

describe('SixExpComponent', () => {
  let component: SixExpComponent;
  let fixture: ComponentFixture<SixExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixExpComponent]
    });
    fixture = TestBed.createComponent(SixExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
