import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('../app/employee/employee.component').then(
        (m) => m.EmployeeComponent
      ),
  },
  {
    path: 'user_management',
    loadComponent: () =>
      import('../app/user-management/user-management.component').then(
        (m) => m.UserManagementComponent
      ),
  },
  {
    path: 'admin_control',
    loadComponent: () =>
      import('../app/admin-control/admin-control.component').then(
        (m) => m.AdminControlComponent
      ),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
