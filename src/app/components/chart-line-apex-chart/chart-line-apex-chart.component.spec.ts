import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineApexChartComponent } from './chart-line-apex-chart.component';

describe('ChartLineApexChartComponent', () => {
  let component: ChartLineApexChartComponent;
  let fixture: ComponentFixture<ChartLineApexChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLineApexChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartLineApexChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
