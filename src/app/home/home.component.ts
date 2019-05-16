import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // รับค่าจาก API
  dataEmployee:any=[];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadEmployee()
  }

  loadEmployee(){
    this.restApi.getEmployees().subscribe((data: {})=>{
      //console.log(data);
      this.dataEmployee = data
    })
  }

  deleteEmployee(id){
    if(window.confirm('Are you sure, to delete this record?')){
      this.restApi.deleteEmployee(id).subscribe((data: {})=>{
        this.loadEmployee()
      });
    }
  }

}
