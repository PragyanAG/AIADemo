import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Router } from '@angular/router';
import {
  MatDialog
} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  matTableDataSource: any;
  displayedColumns = ['edit', 'serialNumber', 'empid', 'name', 'gender', 'department', 'age', 'delete'];
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTableData();
  }
  getTableData() {
      this.employeeService.getAll().subscribe((data: Employee[])=>{
      this.matTableDataSource = new MatTableDataSource(data);
      this.matTableDataSource.paginator = this.paginator;
      this.matTableDataSource.sort = this.sort;
    }) 
  }
  deleteTable(item: any) {
  }
  getTable(row : any){
   
  }
  btnAddNewClick(){
    this.router.navigateByUrl('Employee/empForm');
  }
}

