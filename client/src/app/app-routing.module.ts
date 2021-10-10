import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Employee/employee-form/employee-form.component';
import { MenuFormComponent } from './Menu/menu-form/menu-form.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { RoutingListComponent } from './Routing/routing-list/routing-list.component';
import { RoutingFormComponent } from './Routing/routing-form/routing-form.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'dashboard', component: AppDashboardComponent},
  { path: 'Employee/empList', component: EmployeeListComponent },
  { path: 'Employee/empForm', component: EmployeeFormComponent },
  { path: 'Menu/menuList', component: MenuListComponent },
  { path: 'Menu/menuForm', component: MenuFormComponent },
  { path: 'Routing/routingList', component: RoutingListComponent },
  { path: 'Routing/routingForm', component: RoutingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
