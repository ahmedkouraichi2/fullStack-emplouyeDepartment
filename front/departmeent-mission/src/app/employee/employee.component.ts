import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departemnet';
import { Employee } from '../model/employee.model';
import { FormGroup } from '@angular/forms';
import { EmployeServicesService } from '../services/employe-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departements!: Array<Departement>; //with list
  departement!: Departement;
  employees!: Employee[];
  employeeFormGroup!: FormGroup;
  constructor( private employeeService :EmployeServicesService ,private route:Router){

  }
  ngOnInit(): void {
    this.reloadData() ;
  }


  reloadData(){

    this.employeeService.listerEmployee().subscribe({
       next :(data) =>{
         this.employees = data ;
       },
       error : (err) =>{
         console.log(err)
       }
      }
    );

  }


  update(id: number) {
     this.route.navigate(['/details', id]);
  }

  delete(id:number){
     this.employeeService.deleteEmployee(id).subscribe(
       rest => 
       this.reloadData()
     )
  }

}
