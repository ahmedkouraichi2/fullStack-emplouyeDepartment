import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../services/departement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-departement',
  templateUrl: './new-departement.component.html',
  styleUrls: ['./new-departement.component.css']
})
export class NewDepartementComponent  implements OnInit{
  errorMessage=''
  departementFormGroup! : FormGroup
  constructor( private departementService :DepartementService, private router:Router , private fb:FormBuilder){
    this.departementFormGroup = this.fb.group({
      name:this.fb.control("",[Validators.required,Validators.maxLength(10),Validators.minLength(2)])

    })
  
     
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  resetForm(){
     this.departementFormGroup.reset();
  }

  onSubmit() {
    let department = this.departementFormGroup.value;
    this.departementService.ajouterdepartement(department).subscribe(
      {
        next: data => {
          alert("Department added");
          this.resetForm();
        },
        error: err => {
          this.errorMessage = err;
        }
      }
    );
  }


  

}
