import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineCanvasJsComponent } from './chart-line-canvas-js.component';

describe('ChartLineCanvasJsComponent', () => {
  let component: ChartLineCanvasJsComponent;
  let fixture: ComponentFixture<ChartLineCanvasJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartLineCanvasJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartLineCanvasJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
