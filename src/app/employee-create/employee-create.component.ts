import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  // Binding Form
  employeeData = {
    name: '',
    email: '',
    phone: 0
  }

  constructor(private restApi: RestApiService, private router: Router) { }

  ngOnInit() {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeData).subscribe((data: {}) => {
      this.router.navigate(["/home"])
    })
  }

}
