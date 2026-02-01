import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart-line-canvas-js',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './chart-line-canvas-js.component.html',
  styleUrl: './chart-line-canvas-js.component.css'
})
export class ChartLineCanvasJsComponent {
  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      
    },
    axisX: {
      valueFormatString: "DD MMM",
      //line elli bezhar feha el x axis
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      },
      gridThickness: 0, 
      tickLength: 0 
    },
    axisY: {
      title: "Number of Visits",
      gridColor: "#bfbdbd80", 
      Color: "#aaa", 
      tickLength: 0,
      crosshair: {
        enabled: true ,
        
      }
    },
    toolTip: {
      shared: true,
      backgroundColor: "#ffffff",
      cornerRadius: 5
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "top",
      horizontalAlign: "center",
      dockInsidePlotArea: false,
      itemclick: function(e: any) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [
      {
        type: "spline",      
        name: "Total Visit",
        showInLegend: true,
        color: '#0d6efd',  
        lineThickness: 3,     
        markerSize: 0,     
        yValueFormatString: "#,###",
        dataPoints: [
          { x: new Date(2022, 0, 3), y: 650 },
          { x: new Date(2022, 0, 4), y: 700 },
          { x: new Date(2022, 0, 5), y: 710 },
          { x: new Date(2022, 0, 6), y: 658 },
          { x: new Date(2022, 0, 7), y: 734 },
          { x: new Date(2022, 0, 8), y: 963 },
          { x: new Date(2022, 0, 9), y: 847 },
          { x: new Date(2022, 0, 10), y: 853 },
          { x: new Date(2022, 0, 11), y: 869 },
          { x: new Date(2022, 0, 12), y: 943 },
          { x: new Date(2022, 0, 13), y: 970 },
          { x: new Date(2022, 0, 14), y: 869 },
          { x: new Date(2022, 0, 15), y: 890 },
          { x: new Date(2022, 0, 16), y: 930 }
        ]
      },
      {
        type: "splineArea",   
        name: "Unique Visit",
        showInLegend: true,
        color: "rgba(52, 195, 143, 0.3)",
        lineColor: "#34c38f", 
        lineThickness: 3,
        markerSize: 0,        
        dataPoints: [
          { x: new Date(2022, 0, 3), y: 510 },
          { x: new Date(2022, 0, 4), y: 560 },
          { x: new Date(2022, 0, 5), y: 540 },
          { x: new Date(2022, 0, 6), y: 558 },
          { x: new Date(2022, 0, 7), y: 544 },
          { x: new Date(2022, 0, 8), y: 693 },
          { x: new Date(2022, 0, 9), y: 657 },
          { x: new Date(2022, 0, 10), y: 663 },
          { x: new Date(2022, 0, 11), y: 639 },
          { x: new Date(2022, 0, 12), y: 673 },
          { x: new Date(2022, 0, 13), y: 660 },
          { x: new Date(2022, 0, 14), y: 562 },
          { x: new Date(2022, 0, 15), y: 643 },
          { x: new Date(2022, 0, 16), y: 570 }
        ]
      }
    ]
  }
}
