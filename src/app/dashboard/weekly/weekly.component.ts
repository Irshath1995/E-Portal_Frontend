import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ServiceService } from '../service.service';
import { salesdata } from '../salesdata';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-weekly',
  standalone: true,
  imports: [],
  templateUrl: './weekly.component.html',
  styleUrl: './weekly.component.scss'
})
export class WeeklyComponent implements AfterViewInit  {
  chartdata: salesdata[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  chart: Chart | undefined;

  constructor(private service: ServiceService) {}

  ngAfterViewInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.service.loadsaledata().subscribe(item => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.labeldata = [];
        this.realdata = [];

        this.chartdata.map(o => {
          this.labeldata.push(o.year.toString()); // Or o.label
          this.realdata.push(o.amount);
        });

        this.RenderChart(this.labeldata, this.realdata);
      }
    });
  }

  RenderChart(labeldata: string[], valuedata: number[]) {
    // 🧹 Destroy existing chart before creating a new one
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          data: valuedata,
          backgroundColor: 'rgba(0, 79, 145, 1)',
          barThickness: 14.07,
          borderRadius: 20
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#d8d8d8'
            },
            afterDataLimits(scale) {
              const chart = scale.chart;
              if (!chart.options.plugins?.annotation) return;

              chart.options.plugins.annotation.annotations = {
                targetLine: {
                  type: 'line',
                  yMin: 40,
                  yMax: 40,
                  borderColor: 'green',
                  borderWidth: 1.5,
                  borderDash: [4, 4]
                }
              };
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          annotation: {
            annotations: {} // Placeholder, added in y scale above
          }
        }
      }
    });
  }
}
