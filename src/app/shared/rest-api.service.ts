import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Defind API URL
  apiURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*============================
  CRUD Method for RESTAPI
  ============================*/
  // Fetch Employee list Mehod GET
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + 'employees')
  }

  // Post Employee with Method POST
  createEmployee(employeee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + "employees", JSON.stringify(employeee), this.httpOptions)
  }

  // Get Employee by ID
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + 'employees/'+id)
  }

  // Put Employee with MEthod PUT
  updateEmployee(id,employeee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + "employees/"+id, JSON.stringify(employeee), this.httpOptions) 
  }

}
