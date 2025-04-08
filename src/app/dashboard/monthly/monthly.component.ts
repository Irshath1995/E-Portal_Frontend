import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart } from 'chart.js';

export interface monthly {
  week: number;
  hours: number;
}

@Component({
  selector: 'app-monthly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly.component.html',
  styleUrl: './monthly.component.scss'
})
export class MonthlyComponent implements AfterViewInit  {
  chart: Chart | null = null;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.renderChart(), 0); // wait until DOM is fully rendered
    }
  }

  renderChart() {
    const canvas = document.getElementById('monthlyChart') as HTMLCanvasElement | null;

    if (!canvas) {
      console.warn('Chart canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Failed to get 2D context from canvas");
      return;
    }

    if (this.chart) {
      this.chart.destroy(); // clean up existing chart
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Working Hours',
          data: [8.15, 7.5, 8, 6.75, 8.5],
          fill: true,
          backgroundColor: 'rgba(0, 79, 145, 0.2)',
          borderColor: 'rgba(0, 79, 145, 1)',
          pointBackgroundColor: '#fff',
          pointBorderColor: 'rgba(0, 79, 145, 1)',
          pointRadius: 5,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            ticks: {
              stepSize: 2
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `${context.parsed.y} hours`
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
  }
}
