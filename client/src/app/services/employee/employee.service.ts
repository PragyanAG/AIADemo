import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Employee } from '../../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.baseUrl + '/employees')
      .pipe(
        tap()
      );
  }
  create(newEmployee: string): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + '/employees/', 
                                    JSON.stringify(newEmployee), this.httpOptions)
    .pipe(
      tap()
    )
  }  
}
