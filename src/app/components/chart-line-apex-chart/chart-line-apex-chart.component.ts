import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,    // استيراد جديد
  ApexMarkers, // استيراد جديد
  ApexTooltip, // استيراد جديد
  ApexYAxis    // استيراد جديد
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill;       // إضافة للنوع
  markers: ApexMarkers; // إضافة للنوع
  tooltip: ApexTooltip; // إضافة للنوع
  colors: string[];     // إضافة للنوع
};

@Component({
  selector: 'app-chart-line-apex-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart-line-apex-chart.component.html',
  styleUrl: './chart-line-apex-chart.component.css',
})
export class ChartLineApexChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {}; 
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.chartOptions = {
        series: [
          {
            name: 'Contracts',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ], 
        
        chart: {
          height: 350,
          type: 'line',
          fontFamily: 'var(--font-family)', 
          zoom: { enabled: false },
          toolbar: { show: false },
          dropShadow: {
            enabled: true,
            top: 10,
            left: 0,
            blur: 5,
            opacity: 0.15
          }
        },
        
        dataLabels: { enabled: false },
        
        stroke: {
          curve: 'smooth',
          width: 4 
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["var(--main-color)"] ,
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },

        title: {
          text: '',
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666'
          }
        },

        grid: {
          borderColor: '#f1f1f1',
          strokeDashArray: 4, 
          row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.5,
          },
        },

        markers: {
          size: 0,
          hover: { size: 6 }
        },

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          axisBorder: { show: false },
          axisTicks: { show: false },  
          labels: {
            style: { colors: '#aaa' } 
          }
        },
        
        yaxis: {
            labels: {
                style: { colors: '#aaa' }
            }
        },

        tooltip: {
            theme: 'dark' 
        }
      };
    }
  }
}