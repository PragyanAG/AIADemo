import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Employee/employee-form/employee-form.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { MenuFormComponent } from './Menu/menu-form/menu-form.component';
import { RoutingListComponent } from './Routing/routing-list/routing-list.component';
import { RoutingFormComponent } from './Routing/routing-form/routing-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AppDashboardComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    MenuListComponent,
    MenuFormComponent,
    RoutingListComponent,
    RoutingFormComponent
  ],
  entryComponents: [EmployeeFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule ,
    MatSnackBarModule,
    MatInputModule,
    MatListModule,MatExpansionModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
