import { Component } from '@angular/core';
import  Employees  from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employee-details';

  public employeeDetails:{name:string,age:number,email:string,departments:string[]}[]= Employees;
  key: string ;

  public SortBy = [{name:'name(a-z)'},{name:'name(z-a)'},{name:'age'},{name:'email'}];
  sortByselected= this.SortBy[0].name;
  selectedSort: string ;
   
  constructor(){}

  ngOnInit(){
    this.employeeDetails;
    // console.log("employeeDetails==" + JSON.stringify(this.employeeDetails));  
    this.departmet();
    this.employeeDetails.sort((a,b) => {
          return a.name.localeCompare(b.name)
        } );
    }   
    
    sortBy(event:any){
      this.selectedSort = event.target.value;
       
      if(this.selectedSort === "name(a-z)"){
        this.employeeDetails.sort((a,b) => {
          return a.name.localeCompare(b.name)
        } );
         
      }
      else if(this.selectedSort === "name(z-a)"){
        this.employeeDetails.sort((a,b) => {
          return b.name.localeCompare(a.name)
    
        } );
      }
      else if(this.selectedSort === "age"){
        this.employeeDetails.sort((a,b) => {
          return a.age-b.age;
    
        } );
      }
      else{
        this.employeeDetails.sort((a,b) => {
          return a.email.localeCompare(b.email)
        } );
    
      }
    }
    departmet(){
      for(let i=0; i < this.employeeDetails.length ; i++){
          let a = this.employeeDetails[i]
          console.log(a.departments);
           
      }
    }
    clear(){
      
    }
}
