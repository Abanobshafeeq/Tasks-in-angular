import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsWithModalComponent } from "../products-with-modal/products-with-modal.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductsWithModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  dashboardData = {
    overview: {
      accepted: 2340,
      inContract: 1782,
      inApproval: 1596
    },
    stages: {
      active: 30,
      draft: 65,
      expired: 15,
      cancelled: 10
    },
    types: [
      { name: 'NDA', percentage: 70, color: 'bg-teal' },
      { name: 'Insurance', percentage: 25, color: 'bg-warning' },
      { name: 'Lease', percentage: 50, color: 'bg-orange' },
      { name: 'Maintenance', percentage: 65, color: 'bg-teal-dark' },
      { name: 'Purchase Agreement', percentage: 12, color: 'bg-danger' }
    ],
    cycleTime: [
      { label: 'NDA', days: 25 },
      { label: 'Insurance', days: 45 },
      { label: 'Lease', days: 18 },
      { label: 'Purchase', days: 12 } ,
      { label : 'Ass' ,days: 60},
      { label : 'scs' ,days: 100},
    ]
  };

  contracts = [
    { serial: 'CNTRO00839F', name: 'Horizon Tech', value: 48292, status: 'Active' },
    { serial: 'CNTRO00839F', name: 'Flowtech Labs', value: 20550, status: 'Draft' },
    { serial: 'CNTRO00839F', name: 'ServerTech INC.', value: 72402, status: 'In Review' }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'bg-success text-success';
      case 'Draft': return 'bg-warning text-warning';
      case 'In Review': return 'bg-primary text-primary';
      default: return 'bg-secondary text-secondary';
    }
  }

  get maxStageValue(): number {
    return Math.max(
      this.dashboardData.stages.active,
      this.dashboardData.stages.draft,
      this.dashboardData.stages.expired,
      this.dashboardData.stages.cancelled
    );
  }

  getStageHeight(value: number): number {
    if (this.maxStageValue === 0) return 0;
    return (value / this.maxStageValue) * 100;
  }

  getDonutGradient(): string {
    const c1 = 'var(--main-color)';
    const c2 = '#facc15';
    const c3 = '#f4812f';
    
    return `conic-gradient(
      ${c1} 0% 65%, 
      ${c2} 65% 85%, 
      ${c3} 85% 100%
    )`;
  }
}