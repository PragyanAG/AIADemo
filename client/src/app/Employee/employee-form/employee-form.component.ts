import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  Genders = ["Male", "Female", "Others"];
  Departments = ["IT", "Admin", "Accounts"];
  selected: string = "Male";
  employee = {
    empid: '',
    name: '',
    gender: '',
    department: '',
    age: ''
  };
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { 
     
    }

  ngOnInit(): void {
    
  }
  btnEmployeeList(){
    this.router.navigateByUrl('Employee/empList');
  }
  btnClose() {
    this.router.navigateByUrl('Employee/empList');
  }
  save(){
    
    const newEmployee =JSON.stringify({"empid": this.employee.empid,
                                       "name":this.employee.name,
                                       "gender": this.employee.gender,
                                       "department": this.employee.department,
                                       "age": this.employee.age
                                       });
    this.employeeService.create(newEmployee).subscribe((data: any) => {
      window.alert('Employee added successfully');
      this.router.navigateByUrl('Employee/empList');
    },
      (error: any) => {
      console.log(error);
    });
  };
}