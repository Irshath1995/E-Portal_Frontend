import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common'; // ✅ Add this import
import { MonthlyComponent } from './monthly/monthly.component';
import { WeeklyComponent } from './weekly/weekly.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgbCarouselModule, MatCardModule, MonthlyComponent, WeeklyComponent, ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [NgbCarouselConfig]

})
export class DashboardComponent implements OnInit {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = "src/assets/banner.png";
  current_date = new Date();
  formatted_date = '';

  banners: string[] = [
    '../../assets/banner.png',
    '../../assets/banner.png',
    '../../assets/banner.png'
  ];

  currentBanner: number = 0;

nextBanner() {
  this.currentBanner = (this.currentBanner + 1) % this.banners.length;
}

prevBanner() {
  this.currentBanner =
    (this.currentBanner - 1 + this.banners.length) % this.banners.length;
}

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
    this.formatted_date = formatDate(this.current_date, 'dd MMMM, y, HH:mm', 'en-US');
	}

  ngOnInit() {
  //   setInterval(() => {
  //     this.nextBanner();
  //   }, 5000);
  // }
  }
}
