import { Component } from '@angular/core';
import  Employees  from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-details';
  employeeDetails:any[]= Employees["employees"];
  key: string ;
  constructor(){}
  ngOnInit(){

    this.employeeDetails;
    console.log("employeeDetails=="+JSON.stringify(this.employeeDetails));
  }

   
}
