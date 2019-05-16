import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeData: any = {}
  // Read ID from URL
  id = this.actRoute.snapshot.params['id']

  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    public restApi: RestApiService) { }

  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data
    })
  }

  updateEmployee() {
    this.restApi.updateEmployee(this.id, this.employeeData).subscribe((data: {}) => {
      this.router.navigate(["/home"])
    })
  }

}
