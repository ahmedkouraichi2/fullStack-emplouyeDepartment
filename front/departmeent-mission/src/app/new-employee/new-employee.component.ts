import { Component, OnInit } from '@angular/core';
import { EmployeServicesService } from '../services/employe-services.service';
import { DepartementService } from '../services/departement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../model/departemnet';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent  implements OnInit{
  errormessage!:string;
  employeeFormGroup!:FormGroup;
  departements!:Departement[];
  constructor( private employeService :EmployeServicesService, private servicedepartement :DepartementService, private router:Router, private route:ActivatedRoute ,private form:FormBuilder){

  }
  ngOnInit(): void {
    this.employeeFormGroup=this.form.group({
      fullName:['',Validators.required],
    age:['',Validators.required],
     email:['',Validators.required] ,
    
     departementdto:['',Validators.required],
    })
this.servicedepartement.listedepartements().subscribe({
  next:data=>{
    this.departements=data;
  }
})

    
  }

  onSubmit(){
    let employee : Employee=this.employeeFormGroup.value;
    this.employeService.ajouterEmployee(employee).subscribe({
      next:data=>{alert("departement saved");
      
    },
      error:err=>{this.errormessage = err.error.message;
      }
      
    })


     
  }


}
