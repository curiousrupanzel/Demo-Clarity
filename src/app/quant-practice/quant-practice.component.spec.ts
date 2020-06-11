import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantPracticeComponent } from './quant-practice.component';

describe('QuantPracticeComponent', () => {
  let component: QuantPracticeComponent;
  let fixture: ComponentFixture<QuantPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
