import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCalculatorComponent } from './table-calculator.component';

describe('TableCalculatorComponent', () => {
  let component: TableCalculatorComponent;
  let fixture: ComponentFixture<TableCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
