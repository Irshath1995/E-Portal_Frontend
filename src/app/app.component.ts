import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'eportal';
  @ViewChild('drawer') drawer!: MatDrawer;
  isDrawerOpen = true;

  toggleSidenav() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawer.toggle();
  }

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }


  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
}
